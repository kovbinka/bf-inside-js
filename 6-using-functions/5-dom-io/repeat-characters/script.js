import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { repeat } from './utils/util.js';

document.getElementById('repeat-them').addEventListener('click', () => {
  debugger;

  const str = readString('user-text');
  const num = readNumber('number-of-times');

  const result = repeat(str, num);

  display('repeated-output', result);
});
