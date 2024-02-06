/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  let max = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};
// @lc code=end

const a = lengthOfLIS([0, 1, 0, 3, 2, 3]);
console.log(a);
