var flipgame = function (fronts, backs) {
  let len = fronts.length;
  let min = Infinity;
  const getRe = (i, v) => {
    for (let j = 0; j < len; j++) {
      if (v == fronts[j] && v == backs[j]) {
        return -1;
      }
    }
    return v;
  };
  for (let i = 0; i < len; i++) {
    if (fronts[i] == backs[i]) continue;
    let v1 = getRe(i, fronts[i]);
    let v2 = getRe(i, backs[i]);
    v1 > 0 ? (min = Math.min(min, v1)) : null;
    v2 > 0 ? (min = Math.min(min, v2)) : null;
  }
  return Number.isFinite(min) ? min : 0;
};
const a = flipgame([1, 2, 4, 4, 7], [1, 3, 4, 1, 3]);
const b = flipgame([1, 1], [1, 2]);
console.log(a, b);
