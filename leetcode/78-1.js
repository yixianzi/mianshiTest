var subsets = function (nums) {
  let ans = [];
  const len = nums.length;
  let path = [];
  const dfs = (i, select = true) => {
    if (i == len) {
      ans.push(path.slice());
      return;
    }
    path.push(nums[i]);
    dfs(i + 1);

    path.pop();
    dfs(i + 1);
  };
  dfs(0);
  return ans;
};
let a = subsets([1, 2, 3]);
console.log(a);
