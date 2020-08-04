const pickBlurbs = require('./pickBlurbs');
const sRj = require('./splitReplaceJoin');

function madLibber(template, allBlurbs, businessDeets) {

  const pickedBlurbs = pickBlurbs(allBlurbs);
  let coverLetterDraft = sRj(template, businessDeets);
  // TODO: place pickedBlurbs into coverLetterDraft @ ::blurbs::
  return coverLetterDraft
}

module.exports = madLibber;