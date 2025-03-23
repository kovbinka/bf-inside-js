
export function repeat (text = '', repeatNumber = 0) {
  let result = '';
  for (let char of text) {
    let finish = char.repeat(repeatNumber);
    result = result + finish;
  }
  return result;
}
