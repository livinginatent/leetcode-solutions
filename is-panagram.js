const isPangram = (s) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const obj = {};
  const newArr = s.split("").filter((ch) => {
    if (!obj[ch]) {
      obj[ch] = true;
      return true;
    } else {
      return false;
    }
  });
  return alphabet.length === newArr.length;
};

isPangram("thequickbrownfoxjumpsoverthelazydog");
