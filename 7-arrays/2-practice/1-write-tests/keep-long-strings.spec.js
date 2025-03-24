import { keepLongStrings } from './keep-long-strings.js';

describe('filter old array and push to the new array items longer than 5', () => {
  it('should return the string longer than the specified length', () => {
    const arr1 = ['hyperx','razer','steel series','corsair'];
    const result = keepLongStrings(arr1, 7);
    expect(result).toEqual(['steel series']);
  });
  it('should return an empty array if there is no strings are longer than the specified length', () => {
    const arr2 = ['hyperx','razer','steel series','corsair']
    const result2 = keepLongStrings(arr2, 14);
    expect(result2).toEqual([]);
  });
  it('should return an empty array if the original array is empty', () => {
    const arr3 = [];
    const result3 = keepLongStrings(arr3);
    expect(result3).toEqual([])
  });
  it('should return an empty array if there is no parameter in function', () => {
    const result4 = keepLongStrings();
    expect(result4).toEqual([]);
  })
})
