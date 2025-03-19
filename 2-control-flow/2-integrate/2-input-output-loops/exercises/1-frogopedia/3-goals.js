'use strict';

let userInput = '';
let isItAboutFrogs = true;
while (isItAboutFrogs) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */
  if (isItAboutFrogs === '' || isItAboutFrogs === null) {
    alert('that is not something');
    isItAboutFrogs = false;
  } else if (/frog/i.test(userInput) === true) {
    inputIsAboutFrogs = false;
  } else {
    alert('nope, not about frogs.  try again.');
  }
}
  /* -- END: validate input -- */
}

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
