import { allSettled } from './allSettled';

jest.useFakeTimers();
describe('allSettled', () => {
  test('The function should return a Promise', () => {
    expect(allSettled() instanceof Promise).toBe(true);
  });

  test('Promise call should return expected status and values', () => {
    expect(allSettled([
      Promise.resolve(33),
      new Promise(resolve => setTimeout(() => resolve(66), 0)),
      99,
      Promise.reject(new Error('an error')),
    ])).resolves.toEqual([
      { status: 'fulfilled', value: 33 },
      { status: 'fulfilled', value: 66 },
      { status: 'fulfilled', value: 99 },
      { status: 'rejected', reason: new Error('an error') },
    ]);
  });
});
