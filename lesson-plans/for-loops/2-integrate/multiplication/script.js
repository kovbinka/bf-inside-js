'use strict';

import { readNumber, display } from '../../../../lib/dom-io.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  // read user values
  let leftValue = readNumber('left');
  let rightValue = readNumber('right');
  let multiply = 0;

  // use a for loop to multiply the two numbers
  for(let i = 0; i < 1; i++){
    multiply = leftValue * rightValue;
  }

  // display the product
  display('product', multiply);
});
