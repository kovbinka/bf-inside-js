import { someLong } from './some-long.js';

describe('someLong', () => {
  it('should return true if there is string longer of equal than specified length', () => {
    const arr1 = ['hyperx','razer','corsair','rtx'];
    const result1 = someLong(arr1, 5);
    expect(result1).toEqual(true)
  });
  it('return false if the original array is empty', () => {
    const arr2 = [];
    const result2 = someLong(arr2);
    expect(result2).toEqual(false);
  });
  it('return false if there will be empty parameters in function', () => {
    const result3 = someLong();
    expect(result3).toEqual(false);
  })
})
