'use strict';

console.log('-- begin --');

const minutesLeft = 9;

for (let i = minutesLeft; i > 0; i--) {
  const message = `${i} minutes left`;
  console.log(message);
}


let i = minutesLeft;
while (i > 0) {
  const message = `${i} minutes left`;
  console.log(message);
  i--;
}

console.log('-- end --');
