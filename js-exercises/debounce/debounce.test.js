/* eslint-disable no-console */
import { debounce } from "./debounce";

jest.useFakeTimers();

describe('debounce', () => {
  test('test debounce', () => {
    const printHello = () => console.log('hello');
    const debouncedFunction = debounce(printHello, 5000);
    console.log = jest.fn();
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();
    expect(console.log).not.toBeCalled();
    jest.advanceTimersByTime(5000);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('hello');
  });
});
