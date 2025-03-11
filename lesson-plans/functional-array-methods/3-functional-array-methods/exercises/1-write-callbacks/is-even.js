/**
 * returns true if a number is even
 * otherwise returns false
 * @param {number} num - the number
 * @returns {boolean} is the number even?
 */

const nums = [1, 2, 3, 4, 5, 6];
export const isEven = nums.filter((num) => {
  return num % 2 === 0;
});

console.log(isEven);