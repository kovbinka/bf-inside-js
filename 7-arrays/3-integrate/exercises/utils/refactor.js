
export function refactor (arr =[]){
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let average = sum / arr.length;
  return average;
}