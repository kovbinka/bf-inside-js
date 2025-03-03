import { readNumber, readString, display } from '../../../../lib/dom-io.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  // read user values
  const userInput = readString('user-text');
  const userNumber = readNumber('skip-size');
  let result = '';

  if (userInput && userNumber > 0) {
    for (let i = 0; i < userInput.length; i++) {
      if (i % userNumber === 0) {
        result += userInput[i];
      }
    }
  }

  // display the skipped string
  display('skipped-output', result);
});