var getNumbers = () => {
  return Promise.resolve([1, 2, 3])
}
var multi = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num) {
        resolve(num * num)
      } else {
        reject(new Error('num not specified'))
      }
    }, 1000)
  })
}
async function test () {
  var nums = await getNumbers()
  // nums.forEach(async x => {
  //   var res = await multi(x)
  //   console.log(111,res)
  // })
  for (let i = 0; i < nums.length; i++) {
    var res = await multi(nums[i])
    console.log(111,res)
  }
}
test()