/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {String} [text=''] - Some text to remove characters from.
 * @param {String} [keepSymbols=''] - The characters to keep.
 * @returns {String} Text with only the given characters still in it.
 */
export const keepCharacters = (text = '', keepSymbols = '') => {
  const result = new RegExp(`[^${keepSymbols}]`, 'g');
  return text.replace(result, '');
};
