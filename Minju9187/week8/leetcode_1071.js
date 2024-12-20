const str1 = "ABCABC";
const str2 = "ABC";

var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  const gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
};
