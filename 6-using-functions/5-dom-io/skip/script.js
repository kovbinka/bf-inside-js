import { readNumber, readString, display } from '../../../lib/dom-io.js';

import { skip } from './utils/util.js';

document.getElementById('skip-them').addEventListener('click', () => {
  debugger;

  const str = readString('user-text');
  const num = readNumber('skip-size');

  let result = skip(str, num);

  display('skipped-output', result);
});
