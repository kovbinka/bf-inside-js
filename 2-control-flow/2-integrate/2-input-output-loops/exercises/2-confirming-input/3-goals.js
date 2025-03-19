'use strict';

let userInput = '';
let isValidName = false;
while (!isValidName) {
  /* -- BEGIN: validate input -- */
  userInput = prompt('enter your name');

  if(userInput === null || userInput === ''){
    alert('this is not a name');
    continue;
  }

  const confirmMessage = 'is this correct?\n"' + userInput + '"';
  confirm(confirmMessage);
  isValidName = true;
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
