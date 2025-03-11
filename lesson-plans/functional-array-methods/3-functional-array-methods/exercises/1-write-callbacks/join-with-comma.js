/**
 * joins two strings with a comma and a space
 * @param {string} acc - the left string
 * @param {string} str - the right string
 * @returns {string} the strings, joined
 */
export const joinWithComma = (acc = '', str = '') => {
  return acc + ', ' + str;
};

const acc = 'some';
const str = 'words';
const result = joinWithComma(acc, str);
console.log(result);