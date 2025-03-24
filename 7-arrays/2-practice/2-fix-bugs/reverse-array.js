// #todo

/**
 * @param {Array} [arr = []] - Array to reverse
 * @returns {Array} - Returns new reversed array
 */
export const reverseArray = (arr = []) => {
  const newArr = [...arr];
  const backwards = newArr.reverse();
  return backwards;
};
