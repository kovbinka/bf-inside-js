import { readNumber, readString, display } from '../../../lib/dom-io.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  // read user values
  const string = readString('user-text');
  const userNumber = readNumber('number-of-times');

  // repeat the characters in the text
let result = '';
for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < userNumber; j++) {
      result += string[i];
    }
  }

  // display the text with repeated characters
  display('repeated-output', result);
});
