const crypto = require('crypto');

const getAdjective = () => 'happy';
const getAdverb = () => 'quickly';
const getNoun = () => 'box';
const getVerb = () => 'ran';

const generateUUID = (properties) => {
  const propList = properties.split('-');
  return propList
    .map((prop) => {
      switch (prop) {
        case 'a':
        case 'adj':
        case 'adjective':
          return getAdjective();
        case 'A':
        case 'adv':
        case 'adverb':
          return getAdverb();
        case 'n':
        case 'noun':
          return getNoun();
        case 'v':
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
  const uuid = generateUUID(schema);
  if (hasHash) {
    return `${uuid}-${generateHash()}`;
  }
  return uuid;
};

module.exports = reidable;
