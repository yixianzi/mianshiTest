function myNew() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments); // 取出第一个参数
  let result = null;

  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }

  // 新建空对象，对象的原型是构造函数的prototype 对象 newObject.__proto__ = constructor.prototype
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  console.log("XXXX", newObject, result);
  let flag =
    result && (typeof result === "object" || typeof result === "function");

  return flag ? result : newObject;
}
// 使用方法
// myNew(构造函数, 初始化参数);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const a = myNew(Car, "鹰牌", "Talon TSi", 1993);
console.log(a);
function Car2(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  return 1;
}

const a1 = myNew(Car2, "鹰牌", "Talon TSi", 1993);
console.log(a1);
