'use strict';

let validInput = '';
while (true) {
  validInput = prompt('enter anything with "e" or "E" as the 5th letter');
  console.log('userInput:', typeof userInput, userInput);

  // make sure the user entered something
  if(validInput === null || validInput === ''){
    alert('type something');
    continue;
  } else if (validInput.length >= 5 && /e/i.test(validInput[4]) === true) {
    alert('good job!');
    break;
  } else {
    alert('the 5th letter is not "e" or "E", or the input is too short, try again');
    continue;
  }

  // make sure it is long enough to have an "e" in the 5th letter

  // check if the 5th character is an "e" or "E"
}

alert('done: "' + validInput + '"');
