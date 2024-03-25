var groupAnagrams = function (strs) {
  const len = strs.length;
  const map = {};
  for (let i = 0; i < len; i++) {
    const tem = strs[i].split("").sort().join("");
    if (map[tem]) {
      map[tem].push(strs[i]);
    } else {
      map[tem] = [strs[i]];
    }
  }
  return Array.from(Object.values(map));
};

const a = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(a);
