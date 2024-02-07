const reverseVowels = function (s) {
  const vow = s.match(/[aeiou]/gi);
  return s.replace(/[aeiou]/gi, () => vow.pop());
  
};
