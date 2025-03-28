/* remove vowels or consonants

  a program to remove either the vowels or the consonants from text

*/

import { removeCharacters } from './utils/remove-characters.js';

/* ===== main program (use functions) ===== */

alert(
  'enter some text, then decide if you want to remove the vowels or the consonants',
);

let original = null;
while (original === null) {
  original = prompt('enter the text to modify');
}

const removeVowels = confirm(`what do you want to remove?

- vowels: "ok"
- consonants: "cancel"`);

let result = '';
if(removeVowels){
const vowels = 'aeiouAEIOU';
result = removeCharacters(original, vowels);
} else {
const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
result = removeCharacters(original, consonants);
}

// use `removeCharacters` to create a new value for `removified`
const removified = removeVowels ? result : result;

alert(`before: ${original}
after: ${removified}`);
