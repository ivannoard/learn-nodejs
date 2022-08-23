function sayHello() {
  return Promise.resolve('ivan')
}

const result = await sayHello()
console.log(result)