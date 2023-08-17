const deepClone = (obj, hash = new Map()) => {
  if (hash.has(obj)) return obj;
  if (typeof obj == "object") {
    hash.set(obj, obj);
  } else {
    return obj;
  }
  let clone = obj.constructor == Array ? [] : {};
  Object.keys(clone).forEach((key) => {
    typeof obj[key] == "object"
      ? (clone[key] = deepClone(obj[key]))
      : (clone[key] = obj[key]);
  });
  return clone;
};
