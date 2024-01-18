/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let len = nums.length;
  if (len == 1) return nums[0];
  if (len == 2) return Math.max(nums[0], nums[1]);

  const nums1 = nums.slice(0, len - 1);
  const nums2 = nums.slice(1);
  console.log(nums1, nums2);
  const dp = (numArr) => {
    const l = numArr.length;
    if (l == 1) return numArr[0];
    if (l == 2) return Math.max(numArr[0], numArr[1]);
    let dp1 = numArr[0];
    let dp2 = Math.max(numArr[0], numArr[1]);
    let r = 0;
    for (let i = 2; i < l; i++) {
      r = Math.max(dp1 + numArr[i], dp2);
      dp1 = dp2;
      dp2 = r;
    }
    console.log(r);
    return r;
  };
  return Math.max(dp(nums1), dp(nums2));
};
// @lc code=end
const a = rob([1, 2, 3]);
console.log(a);
