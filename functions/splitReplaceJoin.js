/**
 * splitReplaceJoin
 *
 * split template string
 * find items begining with #
 *    replace with value with that key from blurbs obj
 * .join array
 */

// TODO: rename to MadLibber or something like that. will handle deets and
//    call another function to prompt for and insert blurbs at designated location

function splitReplaceJoin(string, obj) {
  const regexTest = word => /^[#].*/.test(word);

  // TODO: replace with regex for 'not a number or letter'
  const punctuation = [',', '.', '?', '!', '/', ':', ';', '(', ')'];

  let maybeKey;
  let strArr = string.split(' ', '\n');

  // TODO: function that finds '::blurbs::' and replaces with chosen blurbs
    // function may prompt in console for the keys?

  for (let i = 0; i < strArr.length; i++) {
    let x = strArr[i];

    if (regexTest(x)) {
      let ending = '';

      // removes punctuation from end of string to reapply
      if (punctuation.includes(x[x.length - 1])) {
        ending = x[x.length - 1];
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