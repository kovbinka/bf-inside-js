'use strict';

/* math

  some simple(ish) math expressions

  hint: if you highlight a line, only that line will be traced

*/

const a = 3 * 2 + 1;
console.assert(a === 7, 'a');

const b = 3 * (2 + 1);
console.assert(b === 9, 'b');

const c = 4 / 2 - 1;
console.assert(c === 1, 'c');

const d = 4 / (2 - 1);
console.assert(d === 4, 'd');

const e = 1 + -2 * 3;
console.assert(e === -5, 'e');

const f = (1 + -2) * 3;
console.assert(f === -3, 'f');

const h = (4 % 2) + 3;
console.assert(h === 3, 'h');

const i = 4 % (2 + 3);
console.assert(i === 4, 'i');

// --- beware of NaN! ---
//  remember implicit coercion?

const x = 1 * 'two' * 3;
console.assert(Object.is(x, NaN), 'x');

const y = 3 + undefined - 3;
console.assert(Object.is(y, NaN), 'y');

const z = (2 - 2) / 0;
console.assert(Object.is(z, Infinity), 'z');
