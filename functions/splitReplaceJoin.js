/**
 * splitReplaceJoin
 *
 * split template string
 * find items begining with #
 *    replace with value with that key from blurbs obj
 * .join array
 */

function splitReplaceJoin(string, obj) {
  const regexTest = word => /^[#].*/.test(word);
  const punctuation = [',', '.', '?', '!'];
  let maybeKey;
  let strArr = string.split(' ');

  // return strArr.map((x, i) => {
  //   console.log(x, i);

  for (let i = 0; i < strArr.length; i++) {
    let x = strArr[i];

    if (regexTest(x)) {
      let ending = '';

      // removes punctuation from end of string to reapply
      if (punctuation.includes(x[x.length - 1])) {
        ending = x[x.length - 1];
        // console.log('ending ', ending)
        maybeKey = x.slice(1, x.length - 1);
      }
      else {
        maybeKey = x.slice(1);
      }

      strArr[i] = obj[maybeKey] + ending;
    }
  }
  return strArr.join(' ');
}

module.exports = splitReplaceJoin;