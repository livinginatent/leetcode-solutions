var firstPalindrome = function (words) {
  for (let word of words) {
    if (word.split("").reverse().join("") === word) {
      console.log(word);
      return word;
    }
  }
  return "";
};

firstPalindrome(["abc", "car", "ada", "racecar", "cool"]);
