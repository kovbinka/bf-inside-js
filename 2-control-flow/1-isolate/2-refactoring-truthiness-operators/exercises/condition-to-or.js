'use strict';

console.log('-- begin --');

// refactor this code to use || instead of a conditional

// try different values and different types
const isAfterFive = 'six';
const isTheWeekend = 'almost friday';
console.log(isAfterFive, isTheWeekend);

let stopWorkingAgain = (isAfterFive === true) || (isTheWeekend === true);
console.log(stopWorkingAgain);

// let stopWorking = isAfterFive === true;
// if (!stopWorking) {
//   stopWorking = isTheWeekend === true;
// }
// console.log(stopWorking);

console.log('-- end --');
