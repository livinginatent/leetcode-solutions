var reversePrefix = function (word, ch) {
  let reversedPart = "";
  let remaining = "";
  if (!word.includes(ch)) {
    return;
  }
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      reversedPart = word
        .slice(0, i + 1)
        .split("")
        .reverse()
        .join("");
      remaining = word.slice(i + 1, word.length);
      console.log(reversedPart + remaining);
      return reversedPart + remaining;
    }
  }
};
reversePrefix("abcdefd", "d");
