const defangIPaddr = (address) => {
  let res = "";
  for (let char of address) {
    if (char === ".") {
      char = "[.]";
    }
    res += char;
  }
  return res;
};
