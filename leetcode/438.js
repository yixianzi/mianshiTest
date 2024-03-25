var findAnagrams = function (s, p) {
  const sArr = s.split("");
  const pArr = p.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  const t = pArr.join("");
  let len = s.length;
  let tlen = t.length;
  const re = [];
  for (let i = 0; i <= len - tlen; i++) {
    const cur = sArr
      .slice(i, tlen + i)
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    if (cur == t) {
      re.push(i);
    }
  }
  return re;
};

const a = findAnagrams("cbaebabacd", "abc");
console.log(a);
let b = "cbaebabacd";
