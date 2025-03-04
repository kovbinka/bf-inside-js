'use strict';
console.log('-- begin --');

// fill in the blanks to pass the assertions
// fill in the documentation to describe the function

'use strict';
console.log('-- begin --');

/**
 * Concatenates three string parameters in order: third, first, second.
 *
 * @param {String} [param1=''] - The first string parameter, becomes second in result
 * @param {String} [param2=''] - The second string parameter, becomes third in result
 * @param {String} [param3=''] - The third string parameter, becomes first in result
 * @returns {String} The concatenated string in order: param3 + param1 + param2
 */
const scramble = (param1, param2, param3) => {
  const result = param3 + param1 + param2;
  return result;
};

// Тест 1
const _1_actual = scramble('a', 'c', 'b');     // 'bac'
const _1_expect = scramble('b', 'c', 'a');     // 'bac'
console.assert(_1_actual === _1_expect, 'Test 1');

// Тест 2
const _2_expect = scramble('c', 'a', 'b');     // 'bca'
const _2_actual = scramble('b', 'a', 'c');     // 'bca'
console.assert(_2_actual === _2_expect, 'Test 2');

// Тест 3
const _3_expect = scramble('a', 'b', 'c');     // 'cab'
const _3_actual = scramble('c', 'a', 'b');     // 'cab'
console.assert(_3_actual === _3_expect, 'Test 3');

// Тест 4
const _4_expect = scramble('a', 'c', 'b');     // 'bac'
const _4_actual = scramble('b', 'c', 'a');     // 'bac'
console.assert(_4_actual === _4_expect, 'Test 4');

// Тест 5
const _5_expect = scramble('a', 'b', 'c');     // 'cab'
const _5_actual = scramble('c', 'a', 'b');     // 'cab'
console.assert(_5_actual === _5_expect, 'Test 5');

// Тест 6
const _6_expect = scramble('a', 'c', 'b');     // 'bac'
const _6_actual = scramble('b', 'c', 'a');     // 'bac'
console.assert(_6_actual === _6_expect, 'Test 6');

console.log('-- end --');
