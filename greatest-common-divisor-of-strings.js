const gcdOfStrings = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;
  if (str1 + str2 !== str2 + str1) return "";
  const gcd = (a, b) => {
    if (!b) return a;
    return gcd(b, a % b);
  };
  const divisor = gcd(len1, len2);
  return str1.slice(0, divisor);
};

gcdOfStrings("ABCABC", "ABC");
