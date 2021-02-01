const wordJSON = require('./words.json');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recRead = (list, ans) => {
  rl.question('', (word) => {
    const trimWord = word.trim();
    if (trimWord === '') {
      wordJSON[ans] = list;
      fs.writeFileSync(
        path.join(__dirname, 'words.json'),
        JSON.stringify(wordJSON)
      );
      return rl.close();
    }
    const set = new Set(list);
    if (trimWord.length) {
      set.add(trimWord);
    }
    recRead([...set], ans);
  });
};

rl.question('Category: ', (ans) => {
  const list = wordJSON[ans];
  if (list) {
    recRead(list, ans);
  } else {
    console.log('Category not found.');
    rl.close();
  }
});

rl.on('close', () => process.exit(0));
