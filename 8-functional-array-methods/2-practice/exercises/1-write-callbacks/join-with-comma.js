/**
 * joins two strings with a comma and a space
 * @param {string} acc - the left string
 * @param {string} str - the right string
 * @returns {string} the strings, joined
 */
export const joinWithComma = (str1 = '', str2 = '') => {
    let result = str1 + ', ' + str2;
    return result;
};
