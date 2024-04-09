const restoreString = (s, indices) => {
  let res = [];
  for (let i = 0; i < s.length; i++) {
    res[indices[i]]=s[i]
  }
  return res.join('')
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);

//s = "codeleet", indices = [4,5,6,7,0,2,1,3]
