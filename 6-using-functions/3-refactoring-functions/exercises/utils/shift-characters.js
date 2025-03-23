/**
 *
 */
export const shiftCharacters = (text = '', shift = 0) => {
  let encodedString = '';
  for (const character of text) {
  const characterCode = character.charCodeAt();
  const newCharCode = characterCode + shift;
  const encodedCharacter = String.fromCharCode(newCharCode);
  encodedString += encodedCharacter;
}
  return encodedString;
};
