const reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  const word = s.split('');
  let start = 0;
  let end = s.length - 1;

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
  console.log(word)
  return word.join("");
};

reverseVowels("hello");

