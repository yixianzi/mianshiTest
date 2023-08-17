/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  let reL = 0;
  let reR = 0;
  const helper = (l, r) => {
    while (l >= 0 && r <= len - 1 && s[l] == s[r]) {
      l--;
      r++;
    }
    l++;
    r--;
    if (reR - reL < r - l) {
      reR = r;
      reL = l;
    }
  };
  for (let i = 0; i < len; i++) {
    //以i为中心
    helper(i, i);
    if (s[i] == s[i + 1]) {
      helper(i, i + 1);
    }
  }
  return s.slice(reL, reR + 1);
};
longestPalindrome("babad");
