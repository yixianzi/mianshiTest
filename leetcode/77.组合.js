/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function (n, k) {
//   let result = [];
//   let path = [];
//   const helper = (n, k, stratIndex) => {
//     console.log(n, k, stratIndex);
//     if (path.length === k) {
//       console.log(path);
//       result.push([...path]);
//       return;
//     }
//     for (let i = stratIndex; i <= n - (k - path.length) + 1; ++i) {
//       path.push(i);
//       helper(n, k, i + 1);
//       path.pop();
//     }
//   };
//   helper(n, k, 1);
//   return result;
// };
var combine = function (n, k) {
  let result = [];
  const helper = (start, prev) => {
    const len = prev.length;
    if (len == k) {
      result.push(prev);
      return;
    }

    const rest = k - len; // 4, 3, 1  => 2
    for (let i = start; i <= n - rest + 1; i++) {
      helper(i + 1, prev.concat(i));
    }
  };
  helper(1, []);
  return result;
};
// @lc code=end
const a = combine(10, 2);
console.log(a);
