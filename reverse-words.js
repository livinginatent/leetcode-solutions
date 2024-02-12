const reverseWords = (s) => {
  return s
    .split(" ")
    .filter((char) => char !== "")
    .reverse()
    .join(" ");
};


