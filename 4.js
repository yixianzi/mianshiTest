let arr = [1,2,3]
console.log(arr[Symbol.iterator]);
let iterator =arr[Symbol.iterator]() // 需要使用健名的形式访问

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
