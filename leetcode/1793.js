var maximumScore = function (nums, k) {
  let min = nums[k];
  let r = min;
  let len = nums.length;
  const dp = [];
  for (let i = k; i < len; i++) {
    min = Math.min(nums[i], min);
    dp.push(min);
    r = Math.max(r, min * (i - k + 1));
  }
  const lenDp = dp.length;
  for (let i = 1; i <= k; i++) {
    let cur = nums[k - i];
    for (let j = 0; j < lenDp; j++) {
      if (cur < dp[j]) {
        dp[j] = cur;
      }
      r = Math.max(r, dp[j] * (i + j + 1));
    }
  }
  return r;
};

const a = maximumScore(
  [6569, 9667, 3148, 7698, 1622, 2194, 793, 9041, 1670, 1872],
  5
);
console.log(a);
