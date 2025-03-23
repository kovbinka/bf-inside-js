/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {String} [text=''] - A string to repeat each character.
 * @param {Number} [Number=0] - How many times to repeat each character.
 * @returns {_} The original text with each character repeated.
 */
export const repeatCharacters = (text = '', repeating = 0) => {
  let result = '';
  for (let char of text){
    result += char.repeat(repeating);
  }
  return result;
};