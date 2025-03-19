'use strict';

let userInput = '';
let userFlag = false;
while (!userFlag) {
  userInput = prompt('type something longer than 3 character');
  /* -- BEGIN: validate input -- */
  if (userInput === null || userInput === 0){
    alert('this is not something');
    continue;
  } else if (userInput.length < 3){
    alert('too short');
    continue;
  } else {
    userFlag = true;
    }
  /* -- END: validate input -- */
}

const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);