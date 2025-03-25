import { readNumber, display } from '../../../lib/dom-io.js';

document.getElementById("do-math").addEventListener('click', () => {
  debugger;

  // read user values
  const firstValue = readNumber('left');
  const secondValue = readNumber('right');

  // use a for loop to multiply the two numbers
  function multiply(num1 = 0, num2 = 0) {
    let result = num1 * num2;
    return result;
  };

  // display the product
  const product = multiply(firstValue, secondValue);
  display('product', product);
});
