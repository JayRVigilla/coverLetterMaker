/**
 * finds backtick syntax for placeholder within string and substitutes for variable with related key in given object
 * treat like a sliding window problem.
**/

const stringAsBackTick = (str, obj) => {
  // if !.includes then return
  // if (!str.includes('${')) return "No placeholder in the string"
  // // let lastIdxFound = since indexof(value, startIdx)
  // let start = 0;
  // let end = 0;

  // // while i <  str.length-3
  // for (let i = 0; i < str.length - 3; i++) {
  //   // if str[i] === $ and str[i+1] === {
  //   // start = i
  //   if (str[i] == '$' && str[i + 1] === '{') {
  //     start = i;
  //     // search for }
  //     for (let j = i + 2; j < str.length; j++) {
  //       if (str[j] === '}') {
  //         end = j;
  //         const variable = str.replace(/** REGEX of "${ ANYTHING}" */, keyMatchingAnything)
  //       }
  //     }
  //   }
  // }
  // // variable = string in between .trim()
  // // buffer = obj.variable.length
  // // replace ${variable} with obj.variable
  // // lastIdxFound += buffer

  /** DIFFERENT APPROACH
   * #variableName is convention in coverletter.txt for identifying variables
   * variable: draftString; a new string to return with values inserted.
   * iterates through coverletter string until # is found
   *   mark location of #
   *   draftString is slice until #location
   *   KeyInQuestion is string that follows # until whitespace (can get the end location by using length + #location)
   *   if keyInQuestion in businessObj then draftString.push(bussinessObj[keyInQuestion])
   *
   * return draftString
   **/
  const draft = "";
  const start = 0;

  for (let i = 0; i < str.length; i++) {
    // iterate until you find '#'
    if (str[i] === '#') {
      const maybeKey = '';

      // draft becomes everything from str until the '#'
      draft += str.slice(start, i - 1);
      // find the end of the possible variable name

      for (let j = i + 1; j < str.length; j++) {
        if (str[j] === ' ') {
          maybeKey = str.slice(i, j - 1);
          if (obj.maybeKey) {
            draft += obj[maybeKey];
            i += maybeKey.length;
            start = i;
          };
        }
      }
    }
  }

  return draft;
};

module.exports = stringAsBackTick;