const reverseVowels = (str) => {
  const word = str.split("");
  let start = 0;
  let end = str.length - 1;
  const vowels = "aeiouAEIOU";
  while (start < end) {
    while (start < end && !vowels.includes(word[start])) {
      start++;
    }
    while (start < end && !vowels.includes(word[end])) {
      end--;
    }
    [word[start], word[end]] = [word[end], word[start]];
    start++;
    end--;
  }
  return word
};

reverseVowels("hello");
