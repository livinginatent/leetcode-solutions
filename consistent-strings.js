var countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed);
  return words.reduce((acc, word) => {
    return word.split("").every((ch) => (set.has(ch) ? acc++ : acc));
  });
};
//allowed = "ab", words = ["ad","bd","aaab","baa","badab"]

countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]);
