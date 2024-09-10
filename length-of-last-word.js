var lengthOfLastWord = function (s) {
  const allWords = s.split(" ");
  const wordsWithLength = [];
  for (const word of allWords) {
    if (word.length) {
      wordsWithLength.push(word);
    }
  }
  return wordsWithLength[wordsWithLength.length-1].length
};

lengthOfLastWord("   fly me   to   the moon  ");
