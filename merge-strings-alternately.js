const mergeAlternately = (input1, input2) => {
  const word1 = input1.split("");
  const word2 = input2.split("");
  const length = Math.max(word1.length, word2.length);
  const mergedArray = [];
  for (let i = 0; i < length; i++) {
    if (word1[i]) {
      mergedArray.push(word1[i]);
    }
    if (word2[i]) {
      mergedArray.push(word2[i]);
    }
  }
  return mergedArray.join("");
};
