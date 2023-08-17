// const module = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// Expected output: 42

Function.prototype.Mcall = function (context) {
  context = context || window;
  context["fn"] = this;
  let arg = [...arguments].slice(1);
  context["fn"](...arg);
  delete context["fn"];
};
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.Mcall(this, name, price);
  this.category = "food";
}

function Toy(name, price) {
  Product.Mcall(this, name, price);
  this.category = "toy";
}

var cheese = new Food("feta", 5);
var fun = new Toy("robot", 40);

console.log(cheese, fun);
