/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 迭代
var coinChange = function (coins, amount) {
  let sum = 0;
  const dp = (ac, co) => {
    sum++;
    if (ac == 0) return 0;
    if (ac < 0) return -1;
    let min = Infinity;
    for (let i = 0; i < co.length; i++) {
      const subMin = dp(ac - co[i], co);
      if (subMin == -1) continue;
      min = Math.min(min, subMin + 1);
    }
    if (min == Infinity) return -1;
    return min;
  };
  const r = dp(amount, coins);
  console.log(sum);
  return r;
};
// @lc code=end
const a = coinChange([1, 2, 5], 11);
console.log(a);

// 剪枝
var coinChange2 = function (coins, amount) {
  let sum = 0;
  const map = new Map();
  const dp = (ac, co) => {
    sum++;
    if (map.get(ac)) {
      return map.get(ac);
    }
    if (ac == 0) return 0;
    if (ac < 0) return -1;
    let min = Infinity;
    for (let i = 0; i < co.length; i++) {
      const subMin = dp(ac - co[i], co);
      if (subMin == -1) continue;
      min = Math.min(min, subMin + 1);
    }
    if (min == Infinity) return -1;

    map.set(ac, min);
    return min;
  };
  const r = dp(amount, coins);
  console.log(sum);
  return r;
};
// @lc code=end
const a1 = coinChange2([1, 2, 5], 11);
console.log(a1);

// 动归
/**
 *
 * dp[i] = min{dp[i - coins[j]} + 1
 * dp[0] = 0
 * 不满足返回-1
 * return dp[account] 即可
 * dp[account] 0 时也是不满足条件返回-1
 */
var coinChange3 = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) {
        continue;
      }
      // if (i - coins[j] == 0) dp[i] = dp[i - coins[j]] + 1;
      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
  if (dp[amount] == amount + 1) {
    return -1;
  }
  return dp[amount];
};

const c = coinChange3([186, 419, 83, 408], 6249);
console.log(c);

var coinChange4 = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  const t = [];
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] < 0) {
        continue;
      }

      dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
    }
  }
  if (dp[amount] == amount + 1) {
    return -1;
  }
  return dp[amount];
};
