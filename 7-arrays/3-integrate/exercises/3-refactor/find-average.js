/* ===== import functions ===== */

import { refactor } from '../utils/refactor.js';

/* ===== main program (use functions) ===== */

alert(
  `enter as many numbers as you want.

When you're done entering numbers press cancel
-> your numbers will be averaged`,
);

// -- gather user input --
const numbers = [];
while (true) {
  const input = prompt('enter the next number or cancel to finish');

  if (input === null) {
    break;
  }

  if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  const nextNumber = Number(input);
  if (Number.isNaN(nextNumber)) {
    alert(`"${input}" is not a number`);
  } else {
    numbers.push(nextNumber);
  }
}
console.log(numbers);

// -- calculate the average --
/* == BEGIN: refactor the averaging logic == */
let theAverage = 0;
theAverage = refactor(numbers);
// for (let i = 0; i < numbers.length; i++) {
//   const number = numbers[i];
//   theAverage += number / numbers.length;
// }
/* == END: refactoring == */
console.log(theAverage);

// -- build the final message --
const message = `numbers:
- ${numbers.join('\n- ')}

average: ${theAverage}`;

// -- alert the final message --
alert(message);
