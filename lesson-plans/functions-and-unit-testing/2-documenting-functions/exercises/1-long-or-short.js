'use strict';

console.log('-- begin --');

/**
 * This returns whether a string is 'long' or 'short' based on a cutoff length.
 *
 * @param {string} text - The string to check the length of.
 * @param {number} cutoff - The length threshold to compare against.
 * @returns {string} A string 'short' if text length is less than cutoff, 'long' otherwise.
 */
const longOrShort = (text, cutoff) => {
  if (text.length < cutoff) {
    return 'short';
  } else {
    return 'long';
  }
};

const _1_expect = 'long';
const _1_actual = longOrShort('qwerty', 5);
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 'long';
const _2_actual = longOrShort('qwerty', 6);
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 'short';
const _3_actual = longOrShort('qwerty', 7);
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = 'long';
const _4_actual = longOrShort('', -1);
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');