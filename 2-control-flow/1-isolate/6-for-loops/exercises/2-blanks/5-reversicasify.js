'use strict';

console.log('-- begin --');

/* Reversicasify

  you can use for loops to do some logic for each element in a string

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reverseUpperCase = '';

for (let i = 0; i < originalString.length; i++) {
  let upperCasing = originalString[i];
  const letterUpperCased = upperCasing.toUpperCase();
  reverseUpperCase = letterUpperCased + reverseUpperCase;
}

console.assert(
  reverseUpperCase === 'EDCBA',
  'reversed string is the original reversed',
);

console.log('-- end --');
