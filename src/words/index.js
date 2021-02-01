const words = require('./words.json');

const getRandomWord = (list) => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

const getAdjective = () => {
  return getRandomWord(words.adjectives);
};

const getAdverb = () => {
  return getRandomWord(words.adverbs);
};

const getNoun = () => {
  return getRandomWord(words.nouns);
};

const getNumber = () => {
  return getRandomWord(words.numbers);
};

const getVerb = () => {
  return getRandomWord(words.verbs);
};

module.exports = {
  getAdjective,
  getAdverb,
  getNoun,
  getNumber,
  getVerb,
};
