'use strict';

/**
 * Adds two numbers together.
 *
 * @param {number} [x=0] - The left left.
 * @param {number} [y=0] - The right number.
 * @returns {number} The sum of x and y.
 */
function sum (num1, num2) {
  return num1 + num2;
};

describe('Summing two numbers together', () => {
  describe('summing two positive numbers', () => {
    it('summing in the right way', () => {
      const expected = 12;
      const actual = sum(6,6);
      expect(expected).toEqual(actual);
    });
    // ...
  });
  describe('summing tow negative numbers', () => {
    it('summing in the right way', () => {
      const expected = -5;
      const actual = sum(-2, -3);
      expect(expected).toEqual(actual);
    });
    // ...
  });
  // ...
});
