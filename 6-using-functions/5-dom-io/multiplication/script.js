import { readNumber, display } from '../../../lib/dom-io.js';

import { multiply } from './utils/util.js';

document.getElementById('do-math').addEventListener('click', () => {
  debugger;

  let left = readNumber('left');
  let right = readNumber('right');

  let result = multiply(left, right);

  display('product', result);
});
