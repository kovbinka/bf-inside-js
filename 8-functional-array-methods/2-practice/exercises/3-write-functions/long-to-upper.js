/**
 *@param {Array} [arr = []] - Array with items to check what it have to be upper cased
 *@param {Number} [length = 0] - Number ti check it have to be upper cased
 *@returns {Array} with filtered and upper cased or lower cased items
 */

export const longToUpper = (arr = [], length = 0) => {
  return arr.map(str => (str.length >= length ? str.toUpperCase() : str));
};

