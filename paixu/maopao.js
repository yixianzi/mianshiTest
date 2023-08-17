const arr = [78, 21, 32, 1, 78, 333, 112, 8, 56, 3, 7, 2];

const sort = (arr) => {
  const len = arr.length;
  console.log(len);
  for (let i = len - 1; i > 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

console.log(sort(arr));
