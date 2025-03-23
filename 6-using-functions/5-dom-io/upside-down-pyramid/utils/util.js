export function pyro(text = '') {
  let result = '';
  
  for (let i = 0; i < text.length; i++) {
    for (let j = i; j < text.length; j++) {
      result += text[j];
    }
    result += '\n';
  }
  
  return result;
}