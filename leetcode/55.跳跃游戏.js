/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxIndex = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (maxIndex >= length - 1) return true;
    if (maxIndex >= i) {
      maxIndex = Math.max(maxIndex, i + nums[i]);
    } else {
      return false;
    }
  }
  return false;
};
// @lc code=end
