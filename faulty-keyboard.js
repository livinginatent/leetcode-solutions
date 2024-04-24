const finalString = (s) => {
  let res = "";
  for (const ch of s) {
    if (ch !== "i") {
      res += ch;
    } else {
      res = res.split("").reverse().join("");
    }
  }
  console.log(res)
  return res;
};
finalString("string");

// s = 'string'
