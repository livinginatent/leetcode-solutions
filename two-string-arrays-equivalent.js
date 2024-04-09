const arrayStringsAreEqual = (word1, word2) => {
  return (
    word1.reduce((res, curr) => {
      return res + curr;
    }, "") ===
    word2.reduce((res, curr) => {
      return res + curr;
    }, "")
  );
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);

//word1 = ["ab", "c"], word2 = ["a", "bc"]
