/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n == 0) return [];

  let memo = new Map();

  const build = (l, r) => {
    let res = [];

    if (l > r) {
      res.push(null);
      return res;
    }
    let memoKey = `${l}&${r}`;
    if (memo.has(memoKey)) return memo.get(memoKey);

    for (let i = l; i <= r; i++) {
      let leftTree = build(l, i - 1);
      let rightTree = build(i + 1, r);
      for (let left of leftTree) {
        for (let right of rightTree) {
          res.push(new TreeNode(i, left, right));
        }
      }
    }
    memo.set(memoKey, res);
    return res;
  };

  return build(1, n);
};
// @lc code=end
const a = generateTrees(3);
console.log(a);
