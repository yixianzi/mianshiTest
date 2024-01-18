var myAtoi = function (s) {
  let sA = s.split("");
  while (sA[0] === " ") {
    sA.shift();
  }
  let f = true;
  sA[0] == "-" ? sA.shift() : (f = false);
  sA[0] == "+" && !f ? sA.shift() : null;
  let len = sA.length;
  let j = 0;
  for (let i = 0; i < len; i++) {
    if (!Number.isFinite(+sA[i]) || sA[i] === " ") {
      break;
    }
    j++;
  }
  let r = +sA.slice(0, j).join("");
  if (f && r > 2 ** 31) {
    return -(2 ** 31);
  }
  if (!f && r > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }
  return f ? -r : r;
};
console.log("%c8.js line:24 object", "color: #007acc;", myAtoi("2147483647"));
