const mergeAlternately = (str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  const len = Math.max(arr1.length, arr2.length);
  let res = ''
  for (let i = 0; i < len; i++) {
    if(arr1[i]){
      res+=arr1[i]
    }
    if(arr2[i]){
      res+=arr2[i]
    }
  }
  console.log(res)
  return res
};

mergeAlternately("abc", "pqr");
