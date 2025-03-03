import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('to-pyramid');

  let result = '';

  if (userInput) {
    for (let i = userInput.length; i > 0; i--) {
      let char = '';
      for (let j = userInput.length - i; j < userInput.length; j++) {
        char += userInput[j];
      }
      result += char + '\n';
    }
  }

  display('pyramided', result);
});
