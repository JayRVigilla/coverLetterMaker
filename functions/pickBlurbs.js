/**
 * Given an object of 'characteristic':'story' pairs, prompt user to
 * select characteristic blurbs to include in their coverletter.
 *
 * When prompted the console should display list of options:
 *    management: "As a regional manager for Dunder Mifflin Paper Co..."
 *    awesomeness: "When climbing Half Dome without a tether..."
 *    fiscallyResponsible: "I am really good with money. Can I haz some? blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah"
 *
 * These samples will present a 50 character preview of each blurb.
 *
 * User will enter the characteristic key they would like to add to the coverLetter
 */

async function pickBlurbs(obj) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  async function receiveBlurbs() {
    rl.question("What's your first choice? ", async function (blurb1) {
      rl.question("Enter your second choice. ", async function (blurb2) {
        rl.question("Enter your third choice. ", async function (blurb3) {
          console.log(`You've picked: \n\n ${obj[blurb1]}\n\n ${obj[blurb2]}\n\n ${obj[blurb3]}`);
          return [[obj[blurb1]], [obj[blurb2]], [obj[blurb3]]];
          // rl.close;
        });
      });
    });

    rl.on("close", function () {
      console.log("\n*****\n\nYou've decided to quit cover letter maker.\n\n*****");
      process.exit(0);
    });
  }

  const promptUser = (obj) => {
    console.log("\n*** Enter characteristic you'd like to add to your cover letter. *** \n")
    for (let key in obj) {
      let preview =
        obj[key].length > 41
          ? obj[key].slice(0, 50) + '...'
          : obj[key];

      console.log(`${key}: ${preview}`);
    }
  }

  promptUser(obj);
  await receiveBlurbs();
}

module.exports = pickBlurbs;