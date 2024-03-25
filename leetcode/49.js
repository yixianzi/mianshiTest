var groupAnagrams = function (strs) {
  strs = strs.sort((a, b) => a.length - b.length);
  const lenMap = new Map();
  const re = [];
  let curMap = {};
  let len = strs.length;
  for (let i = 0; i < len; i++) {
    const cur = strs[i];
    let len = cur.length;
    if (!lenMap.get(len)) {
      lenMap.set(len, new Map());
    }
    curMap = lenMap.get(len);
    const tem = {};
    for (let j = 0; j < cur.length; j++) {
      if (tem[cur[j]]) {
        tem[cur[j]]++;
      } else {
        tem[cur[j]] = 1;
      }
    }
    let Same = false;
    const isSame = (m, n) => {
      const keysM = Object.keys(m);
      const keysN = Object.keys(n);
      if (keysM.length !== keysN.length) {
        return false;
      }
      for (let i = 0; i < keysM.length; i++) {
        const key = keysM[i];
        if (m[key] !== n[key]) {
          return false;
        }
      }
      return true;
    };
    for (let [key, item] of curMap.entries()) {
      if (isSame(item, tem)) {
        re[key].push(cur);
        Same = true;
        break;
      }
    }
    if (!Same) {
      re.push([cur]);
      curMap.set(re.length - 1, tem);
    }
  }
  return re;
};

const a = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

const isSame = (m, n) => {
  console.log(m, n);
  const keysM = Object.keys(m);
  const keysN = Object.keys(n);
  if (keysM.length !== keysN.length) {
    return false;
  }
  for (let i = 0; i < keysM.length; i++) {
    const key = keysM[i];
    if (m[key] !== n[key]) {
      return false;
    }
  }
  return true;
};

const b = isSame({ t: 1, a: 1, n: 1 }, { n: 1, a: 1, t: 1 });
console.log(a, b);
