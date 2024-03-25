// 回溯
var change = function (amount, coins) {
  if (amount == 0) return 1;
  let re = 0;
  let len = coins.length;

  const helper = (amount, k) => {
    for (let i = k; i < len; i++) {
      if (amount - coins[i] == 0) {
        re++;
      } else if (amount - coins[i] > 0) {
        helper(amount - coins[i], i);
      }
    }
  };
  helper(amount, 0);
  return re;
};
