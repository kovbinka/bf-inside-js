import { readString, display } from '../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('to-pyramid');

  // create the pyramid

  let result = '';

  for (let i = 0; i < userInput.length; i++) {
    for (let j = i; j < userInput.length; j++) {
        result += userInput[j];
    }
    result += '\n';
}

  // display the pyramid
  display('pyramided', result);
});
