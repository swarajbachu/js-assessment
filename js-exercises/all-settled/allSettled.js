const allSettled = (promises) => new Promise((resolve) => {
  if (!promises) {
    return;
  }
  const results = [];
  const processPromise = (index, status, valueOrReason) => {
    results[index] = { status, [status === 'fulfilled' ? 'value' : 'reason']: valueOrReason };

    // Check if all promises have been processed, if yes, only then we can return the results
    if (results.filter(Boolean).length === promises.length) {
      resolve(results);
    }
  };

  promises.forEach((promise, index) => {
    // simple just check if the promise is an instance of Promise
    if (promise instanceof Promise) {
      // If it is, we can wait for it to resolve or reject
      promise
        .then((value) => processPromise(index, 'fulfilled', value))
        .catch((reason) => processPromise(index, 'rejected', reason));
    } else {
      // If the value is not a promise, we can resolve it immediately
      processPromise(index, 'fulfilled', promise);
    }
  });
});

export { allSettled };
