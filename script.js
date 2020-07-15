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
    fs.readFile(`./templates/${filename}`, "utf8", function (err, data) {
      if (err) {
        console.log(`Error Found: ${err.message}`);
        process.exit(1);
      } else {
        const file = data;
        return file;
      }
    });
  }

  const letterTemplate = getFile(file1);
  console.log(letterTemplate)
  const userblurbs = getFile(file2);
  console.log(userblurbs);
  const businessDetails = getFile(file3);
  console.log(businessDetails);


  console.log(`letter template ${letterTemplate} \n userBlurb ${userblurbs} \n businessDetails ${businessDetails}`)
}

saveFilesToVariables(process.argv[2],process.argv[3],process.argv[4])
// Day 1 50 minutes
// Day 2 30 minutes