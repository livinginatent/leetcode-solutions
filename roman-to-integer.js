const romanToInt = (s) => {
  const romanNumerals = {
    I: 1,
    IV: 4,
    IX: 9,
    V: 5,
    X: 10,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let res = 0;
 for(let i=0;i<s.length;i++){
    if(s[i])
 }
  console.log(res);
};

romanToInt("IX");

/* 
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
 */
