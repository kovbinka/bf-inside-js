'use strict';

// --- declare callbacks ---

/**
 * Checks if a number is even.
 *
 * @param {Number} [x=0] - The number to check, defaults to 0 if not provided.
 * @returns {Boolean} True if the number is even, false otherwise.
 */
const isEven = (x = 0) => {
  return x % 2 === 0;
};

/**
 * Checks if a number is greater than five.
 *
 * @param {Number} [x=0] - The number to check, defaults to 0 if not provided.
 * @returns {Boolean} True if the number is greater than 5, false otherwise.
 */

const isGreaterThanFive = (x = 0) => {
  return x > 5;
};


// --- declare function that uses callbacks ---

/**
 * Uses a callback to check something about two numbers.
 *  Says if it's true for neither, one or both.
 *
 * @param {number} [num1=0] - The fist number to check.
 * @param {number} [num2=0] - The second number to check.
 * @param {Function} cb - What to check for.
 * @returns {string} "neither", "one" or "both"
 */

function checkNumbers(num1 = 0, num2 = 0, cb) {
  const result1 = cb(num1);
  const result2 = cb(num2);

  if (result1 && result2) return 'both';
  if (result1 || result2) return 'one';
  return 'neither';
}

// --- test your function ---

const check1 = checkThem(1, 2, isGreaterThanFive);
console.assert(check1 === 'neither', 'Test 1');

const check2 = checkThem(6, 5, isGreaterThanFive);
console.assert(check2 === 'one', 'Test 2');

const check3 = checkThem(1, 2, isGreaterThanFive);
console.assert(check3 === 'both', 'Test 3');

const check4 = checkThem(1, 5, isEven);
console.assert(check4 === 'neither', 'Test 4');

const check5 = checkThem(8, 5, isEven);
console.assert(check5 === 'one', 'Test 5');

const check6 = checkThem(2, 4, isEven);
console.assert(check6 === 'both', 'Test 6');
