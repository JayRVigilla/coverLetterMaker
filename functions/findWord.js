function findWord(str, start = 0){
  let word = ''
  let end;

  for (let i = 0; i < str.length; i++) {
    if (str[i + start] === ' ') {
      end = i + start
      word = str.slice(start, end);
      return word
   }
  }
  return undefined;
}

module.exports = findWord