var threeSum = function (nums) {
  let re = [];
  let len = nums.length;
  nums = nums.sort();

  for (let i = 0; i < len; i++) {
    const t = 0 - nums[i];
    const map = {};
    for (let j = i + 1; j < len; j++) {
      
      if (map[t - nums[j]]) {
        re.push([nums[i], nums[j], nums[map[t - nums[j]]]]);
      } else {
        map[nums[j]] = j;
      }
    }
  }
  let tem = re.map((i) => i.sort().join(","));
  console.log(tem);
  let set = new Set(tem);
  return Array.from(set).map((i) => i.split(","));
};

const a = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(a);
