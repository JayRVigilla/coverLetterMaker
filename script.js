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

const fs = require('fs');
const { exit } = require('process');

function saveFilesToVariables(file1, file2, file3) {
  // return given file in templates folder
  function getFile(filename) {
    return fs.readFileSync(`./templates/${filename}`);
  }

  const letterTemplate = getFile(file1);
  const userblurbs = getFile(file2);
  const businessDetails = getFile(file3);


  console.log(`\n letter template: \n ${letterTemplate} *******\n\n\n userBlurb: \n ${userblurbs} *******\n\n\n businessDetails: ${businessDetails}`)
}

saveFilesToVariables(process.argv[2],process.argv[3],process.argv[4])
// Day 1 50 minutes
// Day 2 30 minutes