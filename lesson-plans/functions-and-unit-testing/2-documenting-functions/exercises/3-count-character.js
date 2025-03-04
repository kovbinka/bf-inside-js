'use strict';

console.log('-- begin --');

/**
 * This counts occurrences of a single character in a string.
 *
 * @param {string} text - The string to search within.
 * @param {string} toCount - The single character to count; returns -1 if not a single character.
 * @returns {number} The number of occurrences of toCount in text, or -1 if toCount is invalid.
 */
const countCharacter = (text, toCount) => {
  if (toCount.length !== 1) {
    return -1;
  }

  let count = 0;
  for (const character of text) {
    if (character === toCount) {
      count = count + 1;
    }
  }
  return count;
};

const _1_expect = 1;
const _1_actual = countCharacter('aA', 'a');
console.assert(_1_actual === _1_expect, 'Test 1');

const _2_expect = 0;
const _2_actual = countCharacter('Banana', 'A');
console.assert(_2_actual === _2_expect, 'Test 2');

const _3_expect = 3;
const _3_actual = countCharacter('BANANA', 'A');
console.assert(_3_actual === _3_expect, 'Test 3');

const _4_expect = -1;
const _4_actual = countCharacter('apple', 'ap');
console.assert(_4_actual === _4_expect, 'Test 4');

console.log('-- end --');