'use strict';

/**
 * converts a value to it's truthiness
 * @param {any} val - the value to convert
 * @returns {string} "truey" or "falsey"
 */
const truthiness = (val) => {
  return `${Boolean(val)}y`;
};

// returns an empty array for an empty array
const _1_arg = [];
const _1_expect = [];
const _1_test = deepCompare(_1_arg.map(truthiness), _1_expect);
console.assert(_1_test, 'Test 1');

const result1 = _1_arg.map((char) => !char);
console.log(result1);

// works when all values are truthy
const _2_arg = [100, 'hello', true];
const _2_expect = ['truey', 'truey', 'truey'];
const _2_test = deepCompare(_2_arg.map(truthiness), _2_expect);
console.assert(_2_test, 'Test 2');

const result2 = _2_arg.map((char) => Boolean(char) + 'y');
console.log(result2);


// works when all values are falsy
const _3_arg = ['', 0, NaN, null];
const _3_expect = ['falsey', 'falsey', 'falsey', 'falsey'];
const _3_test = deepCompare(_3_arg.map(truthiness), _3_expect);
console.assert(_3_test, 'Test 3');

const result3 = _3_arg.map((char) => Boolean(char) + 'y');
console.log(result3);

// works when there are mixed values
const _4_arg = [true, 0, NaN, 'hello'];
const _4_expect = ['truey', 'falsey', 'falsey', 'truey'];
const _4_test = deepCompare(_4_arg.map(truthiness), _4_expect);
console.assert(_4_test, 'Test 4');

const result4 = _4_arg.map((char) => Boolean(char) + 'y');
console.log(result4);

// prettier-ignore
function deepCompare(actual, expect) { return ( actual === expect || Object.is(actual, expect) || (Object(actual) === actual && Object(expect) === expect && ((Array.isArray(actual) && Array.isArray(expect) && actual.length === expect.length && expect.every((expect, index) => deepCompare(actual[index], expect))) || (Object.keys(actual).length === Object.keys(expect).length && Object.keys(expect).every(key => deepCompare(actual[key], expect[key]))))));} // eslint-disable-line
