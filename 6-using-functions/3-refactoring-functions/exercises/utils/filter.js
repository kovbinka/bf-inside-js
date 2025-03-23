/**
 *
 */
export const filter = (text = '', removeThese = '') => {
  let filteredInput = '';
  for (const character of text) {
  const lowerCaseCharacter = character.toLowerCase();
  if (!removeThese.includes(lowerCaseCharacter)) {
    filteredInput += character;
  }
}
return filteredInput;
};
