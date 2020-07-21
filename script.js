/**
 * coverLetter App
 * Node.js script that will fill in blanks on a MadLibbed resume template from
 * following args:
 *    1. Text file of coverletter blurbs a user can choose from.
 *        - Will be treated as an array of strings.
 *        - ALTERNATIVE Object with nickname: "string" as key value pairs.
 *    2. Text file with personalized messages to open and close the letter
 *       with dependent upon the job.
 *    3. Name of Company.
 *    4. Job Title
 *
 * Output text file.
 */

// Day 4 TODO: format txt files into backtic-string, and objects,
        // madlib the files together
        // output to a txt file

const fs = require('fs');
const { exit } = require('process');
const { stringify } = require('querystring');

function saveFilesToVariables(file1, file2, file3) {
  // return given file in templates folder
  function getFile(filename) {
    return fs.readFileSync(`./templates/${filename}`).toString();
    }

  const letterTemplate = getFile(file1).toString();
  const userBlurbs = JSON.parse(getFile(file2));
  const businessDetails = JSON.parse(getFile(file3));


  console.log(`letterTemplate: ${letterTemplate} \nuserBlurbs: ${userBlurbs} \nbusinessDetails: ${businessDetails}`)
}

saveFilesToVariables(process.argv[2], process.argv[3], process.argv[4]);

// finds backtick syntax for placeholder within string and substitutes for variable with related key in given object
// treat like a sliding window problem.
function treatStringAsBacktick(str, obj) {
  // if !.includes then return
  if (!str.includes('${')) return "No placeholder in the string"
  // let lastIdxFound = since indexof(value, startIdx)
  let start = 0;
  let end = 0;

  // while i <  str.length-3
  for (let i = 0; i < str.length - 3; i++){
    // if str[i] === $ and str[i+1] === {
      // start = i
      if (str[i] == '$' && str[i + 1] === '{') {
        start = i;
        // search for }
        for (let j = i + 2; j < str.length; j++) {
          if (str[j] === '}') {
            end = j;
            const variable = str.replace(/** REGEX of "${ ANYTHING}" */, keyMatchingAnything)
          }
        }
    }
  }
        // variable = string in between .trim()
        // buffer = obj.variable.length
        // replace ${variable} with obj.variable
        // lastIdxFound += buffer
  return str;
 }

