/**
 *@param {Array} [arr = []] - Array to check items inside
 *@param {String} [toFind = ''] - String to check if it's includes inside an Array
 *@returns {Array} - Returns a new Array with coincidence  
 */
export const search = (arr = [], toFind = '') => {
  const result = [];
  for (let char of arr){
    if(char === toFind){
      result.push(char);
    }
  }
  return result;
};
