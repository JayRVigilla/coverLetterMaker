/**
 * finds backtick syntax for placeholder within string and substitutes for key in object
 * treat like a sliding window problem.
 * #variableName is convention in coverletter.txt for identifying variables
 * variableName: draftString; a new string to return with values inserted.
 *
 * iterates through coverletter string until # is found
 *   declare start=0, end
 *
 *   mark location (i) of #
 *      end = i-1
 *      draftString appends slice until end
 *   KeyInQuestion is string following # until ' ' (using j to iterate)
 *        if keyInQuestion in obj
 *          draftString += obj[keyInQuestion]
 *        get the stringEnd location by using keyInQuestion.length + i)
 *
 * return draftString
 **/

const findWord = require('./findWord');

function stringAsBackTick(str, obj) {
  
  let draft = "";
  let start = 0;
  let end;

  for (let i = 0; i < str.length; i++) {
    // iterate until you find '#'
    if (str[i] === '#') {
      let maybeKey = '';
      console.log('maybe key started', maybeKey);
      end = i;
      // draft becomes everything from str until the '#'
      draft += str.slice(start, end);

      // find the end of the possible variable name
      maybeKey += findWord(str, i + 1);
      console.log('value of maybeKey', maybeKey);

      if (obj[maybeKey]) {
        draft += obj[maybeKey];
        i += maybeKey.length;
        start = end;
      };
    }
  }

  return draft;
};

module.exports = stringAsBackTick;