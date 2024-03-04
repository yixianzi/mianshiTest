var canJump = function (nums) {
  const len = nums.length;
  if (len == 1) return true;
  const helper = (index) => {
    console.log(index);
    if (index >= len - 1) return true;
    let k = nums[index];
    if (k == 0) return false;
    let r = index;
    let rr = index;
    for (let i = 1; i <= k; i++) {
      if (i + index >= len - 1) return true;
      const canJ = i + nums[i + index] + index;
      if (canJ >= r) {
        r = canJ;
        rr = i + index;
      }
    }
    return helper(rr);
  };
  return helper(0);
};

let a = canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]);
console.log(a);
let b = canJump([3, 2, 1, 0, 4]);
console.log(b);
