const isValidParentheses = (str) => {
  const stack = [];
  const pairs = { "(": ")", "[": "]", "{": "}" };
  for (char in str) {
    if (pairs[char]) {
      stack.push(pairs[char]);
    } else {
      if (stack.pop() !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
