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


function pickBlurbs(obj) {
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

  const acceptUserInput = () => {
    // takes entered args (characteristic keys)
    // returns as array of strings
   }

  promptUser(obj);
  // acceptUserInput()
}
module.exports = pickBlurbs;