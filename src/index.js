const crypto = require('crypto');
const {
  getAdjective,
  getAdverb,
  getNoun,
  getNumber,
  getVerb,
} = require('./words');

const generateUUID = (properties) => {
  const propList = properties.split('-');
  return propList
    .map((prop) => {
      switch (prop) {
        case 'adj':
        case 'adjective':
          return getAdjective();
        case 'adv':
        case 'adverb':
          return getAdverb();
        case 'noun':
          return getNoun();
        case 'num':
        case 'number':
          return getNumber();
        case 'verb':
          return getVerb();
        case 'rand':
          return crypto.randomBytes(3).toString('hex');
        default:
          throw new Error('Invalid schema.');
      }
    })
    .join('-');
};

const reidable = (schema = 'adj-noun-rand') => {
  let uuid;
  try {
    uuid = generateUUID(schema);
  } catch (err) {
    console.error(err);
  }
  return uuid;
};

module.exports = reidable;
