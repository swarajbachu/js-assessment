const allPromises = (promises) => new Promise((resolve, reject) => {
  if (!promises) {
    return;
  }
  const results = [];
  let completedPromises = 0;

  const handlePromiseResult = (index, value) => {
    results[index] = value;
    completedPromises += 1;

    if (completedPromises === promises.length) {
      resolve(results);
    }
  };
  promises.forEach((promise, index) => {
    if (promise instanceof Promise) {
      // everything is same as promise allsettle except we are not handling the reject case
      // here if a promise is rejected, the allPromises will be rejected (or basically dont return)
      promise
        .then((value) => handlePromiseResult(index, value))
        .catch((error) => reject(error));
    } else {
      handlePromiseResult(index, promise);
    }
  });
});

export { allPromises };
