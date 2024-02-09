const mergeAlternately = (word1,word2) => {
  const len = Math.max(word1.length,word2.length)
  let result = ''
  for(let i=0;i<len;i++){
    if(word1[i]){
      result+=word1[i]
    }
    if (word2[i]) {
      result += word2[i];
    }
  }
  return result
}

