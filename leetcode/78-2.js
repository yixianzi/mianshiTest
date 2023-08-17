var subsets = function (nums) {
  let ans = [];
  const len = nums.length;
  let path = [];
  const dfs = (i, select = true) => {
    ans.push(path.slice());
    if (i == len) {
      return;
    }
    for (let j = i; j < len; j++) {
      path.push(nums[j]);
      dfs(j + 1);
      path.pop();
    }
  };
  dfs(0);
  return ans;
};
let a = subsets([1, 2, 3]);
console.log(a);
