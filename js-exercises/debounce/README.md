## Instructions

Implement debounce. 

Debouncing is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

```js
let debouncedFn = debounce(() => console.log("hello"), 5000);
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn();
debouncedFn(); // Will run after ~5s and print "hello" only once
```