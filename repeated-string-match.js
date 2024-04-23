const repeatedStringMatch = (A, B) => {
  const count = Math.ceil(A.length/B.length)
  const str = A.repeat(count)
  return str.includes(B) ? count : (str+A).includes(B) ? count +1 : -1 
};

repeatedStringMatch("abc", "cabcab");

//abc

//bcaabc
