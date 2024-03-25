function getType(value) {
  if (value === null) {
    return value + "";
  }
  // 判断数据是否是引用类型
  if (typeof value === "object") {
    let valueClass = Object.prototype.toString.call(value);
    console.log(1, valueClass);
    let type = valueClass.split(" ")[1].split("");
    type.pop(); // 删除]
    return type.join("").toLowerCase();
  } else {
    // 判断数据是基本数据类型的情况和函数的情况
    console.log(value);
    return typeof value;
  }
}

const a = getType(null);
const a1 = getType(1);
const a2 = getType("sss");
const a3 = getType([1, 2]);
const a4 = getType({});
const a5 = getType(function () {});

console.log(a, a1, a2, a3, a4, a5);
