'use strict';

console.log('-- begin --');

/* Reverse strings

  you can use for loops to do some logic for each element in a string

  this loop should create a new string with the letters from the original reversed

*/

const originalString = 'abcde';
console.log('originalString:', originalString);

let reversedString = '';

for (let i = 0; i < originalString.length; i++) {
  const nextLetter = originalString[i];
  reversedString = nextLetter + reversedString;

  console.log(reversedString); // your stepper variable
  console.log('reversedString:', reversedString);
}

console.assert(
  reversedString === 'edcba',
  'reversed string is the original reversed',
);

console.log('-- end --');
