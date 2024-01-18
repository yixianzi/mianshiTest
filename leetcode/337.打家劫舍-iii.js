/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const dp = (r) => {
    let re = [0, 0]; // 0：不偷自己，1偷自己的最大值
    if (!r) return re;
    const lre = dp(r.left);
    const rre = dp(r.right);
    re[0] = Math.max(lre[0], lre[1]) + Math.max(rre[0], rre[1]);

    re[1] = lre[0] + rre[0] + r.val;
    return re;
  };
  const red = dp(root);
  return Math.max(red[0], red[1]);
};
// @lc code=end
