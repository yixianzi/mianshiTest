const findThree = (arr, target) => {
  arr.sort((a, b) => a - b);
  let r = [];
  let cur = null;
  for (let i = 0; i < arr.length - 2; i++) {
    if (cur == arr[i]) continue;
    cur = arr[i];
    let map = {};
    let t = target - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (!map[t - arr[j]]) {
        map[arr[j]] = arr[j];
      } else {
        r.push([arr[i], t - arr[j], arr[j]]);
      }
    }
  }
  return r;
  // [...new Set(r.map((i) => i.join(",")))].map((i) =>
  //   i.split(",").map((i) => +i)
  // );
};

console.log(findThree([5, 2, 1, 1, 3, 4, 6], 8));

const findTree2 = (arr, target) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let r = [];

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    if (i > 0 && arr[i] == arr[i - 1]) {
      continue;
    }
    console.log(left, right);
    while (left < right) {
      while (arr[i] + arr[left] + arr[right] < target) {
        // left 小了
        left++;
        while (left < right && arr[left] == arr[left - 1]) {
          left++;
        }
      }

      while (arr[i] + arr[left] + arr[right] > target) {
        // right 大了
        right--;
        while (left < right && arr[right] == arr[right + 1]) {
          right--;
        }
      }

      if (arr[i] + arr[left] + arr[right] == target && left < right) {
        r.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }
    }
  }
  return r;
};

console.log(findTree2([5, 2, 1, 1, 3, 4, 6], 8));
