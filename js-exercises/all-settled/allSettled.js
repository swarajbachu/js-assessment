const allSettled = (promises) => new Promise((resolve) => {
  if (!promises) {
    return;
  }
  const results = [];
  const processPromise = (index, status, valueOrReason) => {
    results[index] = { status, [status === 'fulfilled' ? 'value' : 'reason']: valueOrReason };

    // Check if all promises have been processed
    if (results.filter(Boolean).length === promises.length) {
      resolve(results);
    }
  };

  promises.forEach((promise, index) => {
    if (promise instanceof Promise) {
      promise
        .then((value) => processPromise(index, 'fulfilled', value))
        .catch((reason) => processPromise(index, 'rejected', reason));
    } else {
      // If the value is not a promise, consider it as fulfilled
      processPromise(index, 'fulfilled', promise);
    }
  });
});

export { allSettled };
