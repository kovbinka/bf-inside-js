import { readString, display } from '../../../lib/dom-io.js';

import { pyro } from './utils/util.js';

document.getElementById('pyramid-it').addEventListener('click', () => {
  debugger;

  const txt = readString('to-pyramid');

  const result = pyro(txt);

  display('pyramided', result);
  
});
