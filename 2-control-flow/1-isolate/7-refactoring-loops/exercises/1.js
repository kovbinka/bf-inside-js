'use strict';

console.log('-- begin --');

const school = 'HackYourFuture';

for (const letter of school) {
  console.log(letter);
}

// write this for...of loop as a for loop:

for (let i = 0; i < school.length; i++) {
  let letterOne = school[i];
  console.log(letterOne);
}

// write this for loop as a while loop:

let x = 0
while (x < school.length) {
  const letter = school[x];
  console.log(letter);
  x++;
}

console.log('-- end --');
