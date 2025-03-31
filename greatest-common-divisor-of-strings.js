const greatestCommonDivisor = (str1, str2) => {
  if (str1 + str2 !== str2 + str1) return "";
  const len1 = str1.length;
  const len2 = str2.length;
  const gcd = (a, b) => {
    if (!b) return a;
    return gcd(b, a % b);
  };
  const len = gcd(len1, len2);
  console.log(str1.slice(0, len));
};

greatestCommonDivisor("abc", "ABCABC");
