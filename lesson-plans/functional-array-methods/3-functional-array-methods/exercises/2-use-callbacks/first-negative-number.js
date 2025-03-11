/**
 * find the first negative number, returns undefined if there is none
 *  does not modify the array
 * @param {any[]} arr - the array of values
 * @returns {(number|undefined)} the first negative number
 */
// export const firstNegativeNumber = (arr = []) => {
//   let find = arr.find((num) => num < 0);
//   if (find){
//     return find;
//   } else {
//     return undefined;
//   }
//   };

export const firstNegativeNumber = (arr = []) => {
  for (const item of arr) {
    if (typeof item === 'number' && item < 0) {
      return item;
    }
  }
};
