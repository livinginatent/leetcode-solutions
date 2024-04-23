const finalString = (s) => {
  const arr = s.split("");
  let res = "";
  for (const ch of s) {
    if (ch !== "i") {
      res += ch;
    } else {
      res = res.split("").reverse().join("");
    }
  }
  return res;
};
finalString("string");

// s = 'string'
