/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const left = ["(", "{", "["];
  let len = s.length;
  const stack = [];
  for (let i = 0; i < len; i++) {
    if (left.includes(s[i])) {
      stack.push(s[i]);
    } else {
      let pop = stack.pop();
      if (
        (pop == "(" && s[i] == ")") ||
        (pop == "{" && s[i] == "}") ||
        (pop == "[" && s[i] == "]")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};
