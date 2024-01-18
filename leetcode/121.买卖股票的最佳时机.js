/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let r = 0;
  let min = Infinity;
  const len = prices.length;
  for (let i = 0; i < len; i++) {
    min = Math.min(min, prices[i]);
    r = Math.max(r, prices[i] - min);
  }
  return r;
};
// @lc code=end
