function debounce(fn, timeInMs) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, timeInMs);
  };
}

export { debounce };
