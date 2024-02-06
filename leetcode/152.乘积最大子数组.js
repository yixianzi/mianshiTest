/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function (nums) {
//   const len = nums.length;
//   if (len == 1) return nums[0];
//   const dp = [1, 1];
//   let max = -Infinity;
//   for (let i = 0; i < len; i++) {
//     if (nums[i] == 0) {
//       dp[0] = 0;
//       dp[1] = 0;
//     } else {
//       dp[0] = dp[0] * nums[i] > 0 ? dp[0] * nums[i] : nums[i];
//       dp[1] =
//         dp[1] * nums[i] == 0 ? (nums[i] > 0 ? nums[i] : 0) : dp[1] * nums[i];
//     }
//     console.log(max, dp);
//     max = Math.max(max, dp[0], dp[1]);
//   }
//   return max;
// };
var maxProduct = function (nums) {
  const len = nums.length;
  if (len == 1) return nums[0];
  const dp = [nums[0], nums[0]]; // 以i为尾的最大和最小
  let max = dp[0];
  for (let i = 1; i < len; i++) {
    const [t1, t2] = dp;
    dp[0] = Math.max(
      // nums[i] > 0
      t1 * nums[i],
      // 自己
      nums[i],
      // nums[i] < 0
      t2 * nums[i]
    );

    dp[1] = Math.min(
      // nums[i] > 0
      t1 * nums[i],
      // 自己
      nums[i],
      // nums[i] < 0
      t2 * nums[i]
    );
    console.log(dp);
    max = Math.max(max, dp[0], dp[1]);
  }
  return max;
};
// @lc code=end
const a = maxProduct([2, -1, 1, 1]);
console.log(a);
