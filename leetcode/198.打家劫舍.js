/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (len == 1) return nums[0];
  if (len == 2) return Math.max(nums[0], nums[1]);

  const dp = Array(len); // 带i

  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < len; i++) {
    // 证明过程：若dp[i-1]中选了i-1，那自然没问题。若dp[i-1]没有选择i-1，则说明dp[i-1] = dp[i-2] num[i]+ dp[i-2] 依然没问题
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[len - 1];
};
// @lc code=end

// const a = rob([2, 1, 1, 2]);
// console.log(a);
//
