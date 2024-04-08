const mostWordsFound = (s) => {
  const wordsArr = s.map((sentence) =>
    sentence.split(" ").filter((item) => item.length)
  );

  const lens = wordsArr.map((item) => item.length);
  return Math.max(...lens);
};
mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);
