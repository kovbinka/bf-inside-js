'use strict';

console.log('-- begin --');

/* All the Rest

  All other arithmetic operators in JavaScript are simpler than +

  to keep things simple for now, focus just on primitive types:

    coerce both values to Number
    do math with the numbers


  the example below shows subtraction, but it's the same for all the rest

    - * / % **

*/

// try different values to see what happens
const a = 2;
const b = 3;

const realSubtraction = a - b;

const aNum = Number(a);
const bNum = Number(b);

const fakeSubtraction = aNum - bNum;

console.assert(realSubtraction === fakeSubtraction, 'always the same!');
console.log(realSubtraction);
console.log(fakeSubtraction);
console.log('-- end --');
