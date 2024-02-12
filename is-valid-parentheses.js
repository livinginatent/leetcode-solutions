const isValidParentheses = (s) => {
  const brackets = { "(": ")", "[": "]", "{": "}" };
  const stack = [];
  for (const char of s) {
    if (brackets[char]) {
      stack.push(brackets[char]);
    } else {
      if (stack.pop()!== char) return false;
    }
  }
  return stack.length === 0;
};


