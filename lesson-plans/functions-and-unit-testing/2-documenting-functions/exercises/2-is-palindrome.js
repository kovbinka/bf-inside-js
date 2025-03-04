'use strict';

console.log('-- begin --');

/**
 * This checks if a string is a palindrome by comparing it to its reverse.
 *
 * @param {string} toCheck - The string to test for palindrome property.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (toCheck) => {
  let reversed = '';
  for (const character of toCheck) {
    reversed = character + reversed;
  }
  return toCheck === reversed;
};

const _1_expect = false;
const _1_actual = isPalindrome('Racecar');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = false;
const _2_actual = isPalindrome('apple');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = true;
const _3_actual = isPalindrome('racecar');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = true;
const _4_actual = isPalindrome('hannah');
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');