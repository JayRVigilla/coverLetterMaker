const fs = require('fs');

function saveFilesToVariables(file1, file2, file3) {
  // return given file in templates folder
  function getFile(filename) {
    return fs.readFileSync(`../templates/${filename}`).toString();
  }

  letterTemplate = getFile(file1).toString();
  userBlurbs = JSON.parse(getFile(file2));
  businessDetails = JSON.parse(getFile(file3));
};

module.exports = saveFilesToVariables;