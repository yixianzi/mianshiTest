//
let a = {};
console.log(a instanceof Object); // true
let b = [1, 2, 3];
console.log(b instanceof Array); // true
console.log(b instanceof Object); // true

function myInstance(left, right) {
  let proto = Object.getPrototypeOf(left); // 获取对象的原型
  prototype = right.prototype; // 构造函数的prototype

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto == prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
console.log(myInstance(a, Object)); // true
console.log(myInstance(b, Array)); // true
console.log(myInstance(b, Object)); // true
