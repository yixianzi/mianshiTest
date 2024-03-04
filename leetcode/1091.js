var shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] == 1) return -1;
  const n = grid.length;
  let min = Infinity;
  const route = new Set();
  const isVaild = (row, col) => {
    if (row < 0 || col < 0 || row >= n || col >= n) {
      return false;
    }
    if (route.has(`${row},${col}`)) {
      return false;
    }
    if (grid[row][col] !== 0) {
      return false;
    }
    return true;
  };
  const helper = (row, col) => {
    route.add(`${row},${col}`);
    console.log(route);
    if (row == n - 1 && col == n - 1) {
      min = Math.min(min, route.size);
      route.delete(`${row},${col}`);
      return;
    }
    if (isVaild(row, col - 1)) {
      helper(row, col - 1);
    }
    if (isVaild(row - 1, col - 1)) {
      helper(row - 1, col - 1);
    }
    if (isVaild(row - 1, col)) {
      helper(row - 1, col);
    }

    if (isVaild(row - 1, col + 1)) {
      helper(row - 1, col + 1);
    }

    if (isVaild(row, col + 1)) {
      helper(row, col + 1);
    }

    if (isVaild(row + 1, col + 1)) {
      helper(row + 1, col + 1);
    }

    if (isVaild(row + 1, col)) {
      helper(row + 1, col);
    }

    if (isVaild(row + 1, col - 1)) {
      helper(row + 1, col - 1);
    }

    route.delete(`${row},${col}`);
  };
  helper(0, 0);
  return min == Infinity ? -1 : min;
};

const grid = [
  [0, 1, 1, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0],
];
const r = shortestPathBinaryMatrix(grid);
console.log(r);
