
export function skip (text = '', num = 0) {
  let index = 0;
  let result = '';
  for (let char of text) {
    if (index % num === 0 || num === 0){
      result += char;
    }
    index++;
  }
  return result;
}
