/**
 *@param {Array} [things = []] - Array which will be checked
 *@param {String} [type = ''] - One of type of objects will be keeped in the array
 *@returns {Array} - Returns the new array with filtered
 */
// export const keepType = (things = [], type = '') => {
//   return things.filter((thing) => {
//     return typeof thing === type;
//   });
// };

export const keepType = (things = [], type = '') => {
  return things.filter(thing => typeof thing === type);
}

// export const keepType = (things = [], type = '') => {
//   if (!Array.isArray(things) || typeof type !== 'string') {
//     return [];
//   }
//   return things.filter(thing => typeof thing === type);
// };