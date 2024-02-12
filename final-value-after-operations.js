const finalValueAfterOperations = (operations) => {
    let X = 0
  for(const op of operations){
    op.includes('+') ? X++ : X--
  }
  console.log(X)
  return X
}

finalValueAfterOperations(["--X", "X++", "X++"]);