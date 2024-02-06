const isValidParentheses = (str) => {
  const stack = []
  const pairs = { "(": ")", "{": "}", "[": "]" };
  for (const char of str){
    if(pairs[char]){
        stack.push(pairs[char])
    }else{
        if(stack.pop()!==char){
            return false
        }
    }
  }
  console.log(stack.length===0)
  return stack.length===0
}

isValidParentheses('()')