const a = {
  a: 1,
};

const c = Symbol("test");

a[c] = "test";

for (let key in a) {
  console.log(key, a[key]);
}

const b = Reflect.ownKeys(a);
console.log(b);

console.log(a[c]);
