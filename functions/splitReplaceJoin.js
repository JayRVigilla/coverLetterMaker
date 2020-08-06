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
const pickBlurbs = require('./pickBlurbs');

async function splitReplaceJoin(string, obj, blurbsObj) {
  try {
    const regexTest = word => /^[#].*/.test(word);

    // TODO: replace with regex for 'not a number or letter'
    const punctuation = [',', '.', '?', '!', '/', ':', ';', '(', ')'];

    let maybeKey;
    let strArr = string.split(' ');


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

      if (strArr[i] === "::blurbs::") {
        const blurbs = await pickBlurbs(blurbsObj);
        strArr.splice(i, 1, ...blurbs); // QUESTION: why isn't this awaiting the result of await pickBlurbs()?
        i += blurbs.length - 1;
      }
    }
    // console.log(strArr.join(' '))
    return strArr.join(' ');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = splitReplaceJoin;