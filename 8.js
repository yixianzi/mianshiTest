// 单例
function proxy(func) {
  let instance;
  let handler = {
    construct(target, args){
      if(!instance){
        // 没有实例存在，就创造一个实例
        instance = Reflect.construct(func,args)
      }
      // 无论怎样最后都返回一个实例（new 关键字）
      return instance
    }
  }

  return new Proxy(func,handler)
}

function Person(name, age){
  this.name = name
  this.age = age
}

const SingletonPerson = proxy(Person)

let person1 = new SingletonPerson('gxy',18)
let person2 = new SingletonPerson('lhy',18)

console.log(person1,person2,person1 === person2);
