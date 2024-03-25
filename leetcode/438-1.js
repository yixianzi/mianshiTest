var findAnagrams = function (s, p) {
  const len = s.length;
  const lenp = p.length;
  if (lenp > len) return [];
  let map = {};
  let sum = lenp;
  for (let i = 0; i < lenp; i++) {
    if (map[p[i]]) {
      map[p[i]]++;
    } else {
      map[p[i]] = 1;
    }
  }
  const o = Object.assign({}, map);
  const re = [];
  let l = 0;
  for (let i = 0; i <= len; i++) {
    let cur = s[i];
    if (map[cur] == undefined) {
      l = i + 1;
      sum = lenp;
      map = Object.assign({}, o);
      continue;
    } else if (map[cur] == 0) {
      while (map[cur] == 0) {
        map[s[l]]++;
        sum++;
        l++;
      }
      map[cur]--;
      sum--;
    } else if (map[cur] > 0) {
      map[cur]--;
      sum--;
    }
    if (sum == 0) {
      re.push(l);
    }
  }
  return re;
};
const a = findAnagrams("cbaebabacd", "abc");
console.log(a);
let b = "cbaebabacd";
