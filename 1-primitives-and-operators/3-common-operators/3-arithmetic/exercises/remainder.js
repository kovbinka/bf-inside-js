'use strict';

console.log('-- begin --');

// a % b
// cast both values to Number then evaluate the remainder when x is divided by y
// what happens when you use Infinity? -> returns the dividend (if finite)
// what happens when you use 0? -> NaN if divisor is 0, otherwise dividend
// what happens when you use NaN? -> NaN

const _1_expect = 0; // 1 % 1 = 0
const _1_native = '1' % 1;  // Number('1') % 1 = 1 % 1 = 0
console.assert(Object.is(_1_expect, _1_native), 'Test 1');

const _2_expect = NaN; // 0 % 0 = NaN
const _2_native = 0 % null;  // 0 % Number(null) = 0 % 0 = NaN
console.assert(Object.is(_2_expect, _2_native), 'Test 2');

const _3_expect = NaN; // 0 % 0 = NaN
const _3_native = false % null;  // Number(false) % Number(null) = 0 % 0 = NaN
console.assert(Object.is(_3_expect, _3_native), 'Test 3');

const _4_expect = NaN; // 12 % 0 = NaN
const _4_native = '12' % false;  // Number('12') % Number(false) = 12 % 0 = NaN
console.assert(Object.is(_4_expect, _4_native), 'Test 4');

const _5_expect = 0; // 0 % 1 = 0
const _5_native = false % true;  // Number(false) % Number(true) = 0 % 1 = 0
console.assert(Object.is(_5_expect, _5_native), 'Test 5');

const _6_expect = 13; // 13 % Infinity = 13
const _6_native = '13' % Infinity;  // Number('13') % Infinity = 13 % Infinity = 13
console.assert(Object.is(_6_expect, _6_native), 'Test 6');

const _7_expect = NaN; // 18 % NaN = NaN
const _7_native = '18' % 'aa';  // Number('18') % Number('aa') = 18 % NaN = NaN
console.assert(Object.is(_7_expect, _7_native), 'Test 7');

const _8_expect = NaN; // NaN % NaN = NaN
const _8_native = 'hello' % 'goodbye';  // Number('hello') % Number('goodbye') = NaN % NaN = NaN
console.assert(Object.is(_8_expect, _8_native), 'Test 8');

const _9_expect = NaN; // NaN % 0 = NaN
const _9_native = undefined % '';  // Number(undefined) % Number('') = NaN % 0 = NaN
console.assert(Object.is(_9_expect, _9_native), 'Test 9');

console.log('-- end --');