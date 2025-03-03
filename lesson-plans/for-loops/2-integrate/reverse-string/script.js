import { readString, display } from '../../../../lib/dom-io.js';

document.getElementById('reverse-it').addEventListener('click', () => {
  debugger;

  // read user text
  const userInput = readString('user-text');
  let result = '';

  // use a for loop that counts down (i--) to reverse the input
 for (let i = userInput.length - 1; i >= 0; i--) {
    result += userInput[i];
  }

  // display the reversed string
  display('reversed-output', result);
});
