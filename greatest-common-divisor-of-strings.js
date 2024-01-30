const gcdOfStrings = (str1, str2) => {
  let res = "";
  const len1 = str1.length;
  const len2 = str2.length;
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = (a, b) => {
    if (a == 0) return b;
    return gcd(b % a, a);
  };
  const div = gcd(len1, len2);
  res = str1.slice(0, div);
  return res;
};
