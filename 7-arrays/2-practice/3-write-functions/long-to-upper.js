/**
 * @param {Array} [arr = []] - Array that will be copied and changed
 * @param {Number} [length = 0] - Number which will be compared with items inside an array
 */
export function longToUpper(arr, length = 0) {
    return arr.map(item => {
        if (typeof item !== 'string') {
            return item;
        }

        if (length === 0 || item.length >= length) {
            return item.toUpperCase();
        }
        
        return item;
    });
}