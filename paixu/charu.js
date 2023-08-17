const arr = [78, 21, 32, 1, 78, 333, 112, 8, 56, 3, 7, 2];

const sort = (arr) => {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        // 直接下一个
        break;
      }
    }
  }
  return arr;
};

console.log(sort(arr));
