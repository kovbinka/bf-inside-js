'use strict';

/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
const isPalindrome = (toCheck = '') => {
  for (let i = 0; i < toCheck.length / 2; i++) {
    const left = toCheck[i];
    const right = toCheck[toCheck.length - 1 - i];
    if (left !== right) {
      return false;
    }
  }
  return true;
};

// const isPalindrome = (toCheck = '') => {
//   const reversed = toCheck.split('').reverse().join('');
//   const compare = reversed === toCheck;
//   return compare;
// };

describe('isPalindrome: checks if a string is the same forwards and backwards', () => {
  describe('what is a palindrome', () => {
    it('is a string that reads the same forwards and backwards', () => {
      const actual = isPalindrome('racecar');
      expect(actual).toEqual(true);
    });
    it('cannot be different forwards and backwards', () => {
      const actual = isPalindrome('apple');
      expect(actual).toEqual(false);
    });
    it('is case sensitive', () => {
      const actual = isPalindrome('Racecar');
      expect(actual).toEqual(false);
    });
    it('can have more than just letters', () => {
      const actual = isPalindrome('!.Han naH.!');
      expect(actual).toEqual(true);
    });
  });
  describe("the function's default parameters", () => {
    it('should be a palindrome', () => {
      const actual = isPalindrome();
      expect(actual).toEqual(true);
    });
  });
});
