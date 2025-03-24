/**
 * @param {Array} [strings = []] - Array to check
 * @param {Number} [long = 0] - Number to check length of the items inside an array
 * @returns {Boolean} - return true or false depends on condition
 */

// export const allLong = (strings = [], long = 0) => {
//   let allAre = false;
//   for (let i = 1; i < strings.length; i++) {
//     let next = strings[i];

//     if (next.length >= long) {
//       allAre = true;
//       break;
//     } else {
//       allAre = false;
//       break;
//     }
//   }
//   return allAre;
// };

export const allLong = (strings = [], long = 0) => {
let allAre = true;
for (let char of strings) {

 if (char.length < long) {
 allAre = false;
 break;
}

 if (char.length > long) {
 allAre = true;
 break;
}
}
return allAre;
}