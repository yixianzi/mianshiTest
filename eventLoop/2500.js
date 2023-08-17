var deleteGreatestValue = function (grid) {
  let len = grid.length;
  let m = grid[0].length;
  for (let i = 0; i < len; i++) {
    grid[i] = grid[i].sort((a, b) => b - a);
  }

  let re = 0;
  for (let j = 0; j < m; j++) {
    let max = 0;
    for (let i = 0; i < len; i++) {
      max = Math.max(grid[i][j], max);
    }
    re += max;
  }
  return re;
};
deleteGreatestValue([
  [1, 2, 4],
  [3, 3, 1],
]);
