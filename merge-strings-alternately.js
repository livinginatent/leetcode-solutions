const mergeAnternately = (word1, word2) => {
  const str1 = word1.split("");
  const str2 = word2.split("");
  let result = "";
  const len = Math.max(str1.length, str2.length);
  for (let i = 0; i < len; i++) {
    if (word1[i]) result += word1[i];
    if (word2[i]) result += word2[i];
  }
  return result;
};

mergeAnternately("abc", "pqr");
