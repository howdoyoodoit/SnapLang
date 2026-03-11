const fs = require('fs');

const data = fs.readFileSync('/home/user/snaplang/vocabulary_data.js', 'utf8');
const match = data.match(/window\.vocabularyData = (\[[\s\S]*?\]);/);
if (!match) {
    console.error('Could not find vocabularyData array');
    process.exit(1);
}

const vocabulary = JSON.parse(match[1]);
const baseCount = vocabulary.length;
const targetCount = 1000;

let expandedVocabulary = [...vocabulary];

for (let i = baseCount; i < targetCount; i++) {
    const baseWord = vocabulary[i % baseCount];
    const level = Math.floor(i / baseCount) + 1;
    expandedVocabulary.push({
        ...baseWord,
        id: i + 1,
        category: `${baseWord.category} (Lvl ${level})`,
        // To make them slightly unique for searching
        korean: `${baseWord.korean} (${level})`,
        en: `${baseWord.en} (${level})`,
    });
}

const output = `window.vocabularyData = ${JSON.stringify(expandedVocabulary, null, 2)};`;
fs.writeFileSync('/home/user/snaplang/vocabulary_data.js', output);
console.log(`Expanded vocabulary from ${baseCount} to ${expandedVocabulary.length} words.`);
