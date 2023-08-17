var subsets = function (nums) {
  let ans = [];
  const len = nums.length;
  let path = [];
  const dfs = (i, select = true) => {
    if (i == len) {
      ans.push(path.slice().filter((e) => e !== ""));
      return;
    }
    path[i] = nums[i];
    dfs(i + 1);

    path[i] = "";
    dfs(i + 1);
  };
  dfs(0);
  return ans;
};
let a = subsets([1, 2, 3]);
console.log(a);
