import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-it').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text');
  const userNumber = readNumber('number-of-times');
  let result = '';

  // repeat the string
    for (let i = 0; i < userInput.length; i++) {
    for (let j = 0; j < userNumber; j++) {
      result += userInput[i];
    }
  }


  // display the repeated string
  display('repeated-output', result);
});
