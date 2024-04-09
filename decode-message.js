const decodeMessage = (key, message) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    
  ];
  let res = "";
  const seen = {};
  const keyArray = key
    .split(" ")
    .map((item) => item.split("").flat())
    .flat()
    .filter((letter) => {
      if (!seen[letter]) {
        seen[letter] = true;
        return true;
      } else {
        false;
      }
    });

  for (let i = 0; i < message.length; i++) {
    const index = keyArray.indexOf(message[i]);
    if (index === -1) {
      res += " ";
    } else {
      res += alphabet[index];
    }
  }return res
};

decodeMessage(
  "the quick brown fox jumps over the lazy dog",
  "vkbs bs t suepuv"
);

// key = "the quick brown fox jumps over the lazy dog";
// message = "vkbs bs t suepuv"
