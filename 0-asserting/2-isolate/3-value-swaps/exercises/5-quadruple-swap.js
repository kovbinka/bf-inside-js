'use strict';

console.log('-- begin --');

// --- declare and initialize variables ---

let a = 'y';
let b = 'w';
let c = 'z';
let d = 'x';
let temp;

// --- swap values ---

temp = a;  // temp = 'y'
a = b;     // a = 'w'
b = d;     // b = 'x'
d = c;     // d = 'z'
c = temp;  // c = 'y'

// --- test final values ---

console.assert(a === 'w', 'Test 1');
console.assert(b === 'x', 'Test 2');
console.assert(c === 'y', 'Test 3');
console.assert(d === 'z', 'Test 4');
console.assert(temp === 'y', 'Test 5');

console.log('-- end --');