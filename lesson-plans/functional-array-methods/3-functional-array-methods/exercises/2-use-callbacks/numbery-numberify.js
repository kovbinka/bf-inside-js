/**
 * Takes an array of strings and returns a new array
 * The new array contains all the numbery strings, cast to number
 * Does not modify the argument
 * @param {string[]} [arr=[]] - The array of strings
 * @returns {number[]} An array containing numbers that aren't NaN
 */
export const numberyNumberify = (arr = []) => {
  return arr
    .filter((item) => {
      if (typeof item !== 'string') return false;
      const num = Number(item);
      return !isNaN(num);
    })
    .map((item) => Number(item));
};