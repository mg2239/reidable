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
        default:
          throw new Error('Invalid schema.');
      }
    })
    .join('-');
};

const generateHash = () => {
  return crypto.randomBytes(3).toString('hex');
};

const reidable = (schema = 'adj-noun', hasHash = false) => {
  let uuid;
  try {
    uuid = generateUUID(schema);
  } catch (err) {
    console.error(err);
  }
  if (hasHash) {
    return `${uuid}-${generateHash()}`;
  }
  return uuid;
};

module.exports = reidable;
