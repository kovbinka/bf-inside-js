import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text');
  const userNumber = readNumber('number-of-times');
  let result = '';

  // repeat the entire string 'userNumber' times
  for (let i = 0; i < userNumber; i++) {
    result += userInput;
  }

  // display the text with repeated string
  display('repeated-output', result);
});