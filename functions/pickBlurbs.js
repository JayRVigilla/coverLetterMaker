/**
 * Given an object of 'characteristic':'story' pairs, prompt user to
 * select characteristic blurbs to include in their coverletter.
 *
 * When prompted the console should display list of options:
 *    management: "As a regional manager for Dunder Mifflin Paper Co..."
 *    awesomeness: "When climbing Half Dome without a tether..."
 *    fiscallyResponsible: "I am really good with money. Can I haz some? blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah"
 *
 * These samples will present a 40 character preview of each blurb.
 *
 * User will enter the characteristic key they would like to add to the coverLetter
 */

// const testObj = { "first": "I have a blurb here",
// "second": "and another blurb here",
// "third": "you should totally hire me",
// "management": "As a regional manager for Dunder Mifflin Paper Company in Scanton, PA I've always looked up to Bono, Jesus, and my grandmother.",
// "awesomeness": "When climbing Half Dome without a tether, You now you're pretty awesome. Dogs Love me.",
// "fiscallyResponsible": "I am really good with money. Can I haz some? blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah",
// }

function pickBlurbs(obj) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const receiveBlurbs = () => {

    rl.question("What's your first choice? ", function (blurb1) {
      rl.question("Enter your second choice. ", function (blurb2) {
        rl.question("Enter your third choice.", function (blurb3) {
          console.log(`You've picked: \n\n ${obj[blurb1]}\n\n ${obj[blurb2]}\n\n ${obj[blurb3]}`);
          rl.close;
        });
      });
    });

    rl.on("close", function() {
      console.log("...moving on");
      process.exit(0);
  });
  }

  const promptUser = (obj) => {
    console.log("Enter characteristic you'd like to add to your cover letter. \n\n")
    for (let key in obj) {
      let preview =
        obj[key].length > 41
          ? obj[key].slice(0, 40) + '...'
          : obj[key];

      console.log(`${key}: ${preview}`);
    }
  }

  // const acceptUserInput = () => {
  //   // takes entered args (characteristic keys)
  //   // returns as array of strings
  //  }

  promptUser(obj);
  // acceptUserInput()
  receiveBlurbs();
}

// pickBlurbs(testObj);

module.exports = pickBlurbs;