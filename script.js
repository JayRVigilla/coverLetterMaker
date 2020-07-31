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
const splitReplaceJoin = require('./functions/splitReplaceJoin');
let letterTemplate = undefined;
let userBlurbs = undefined;
let businessDetails = undefined;

// TODO: readline to create back and forth prompting
// creates a better user experience
// instead of intimidating command line "node script.js **three file names**"

function saveFilesToVariables(file1, file2, file3) {
  // return given file in templates folder
  function getFile(filename) {
    return fs.readFileSync(`./templates/${filename}`).toString();
    }

letterTemplate = getFile(file1).toString();
userBlurbs = JSON.parse(getFile(file2));
businessDetails = JSON.parse(getFile(file3));

  console.log(letterTemplate, userBlurbs, businessDetails);
};

saveFilesToVariables(process.argv[2], process.argv[3], process.argv[4]);

// remove \n from letter template, but be able to reintroduce them afterwards

// process coverLetter and MadLib it
const knitted = splitReplaceJoin(letterTemplate, businessDetails);
console.log('output:\n', knitted);

// output to text file


