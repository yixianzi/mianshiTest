let obj = {}
obj = new Proxy(obj,{
  set(target,key,val){
    console.log('oops',target,key,val)
    return Reflect.set(target,key,val)
  }
})

obj.foo = ''