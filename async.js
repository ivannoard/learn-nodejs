function sayHello(){
  return Promise.resolve('ivan')
}

async function run(){
  const result = await sayHello()
  console.info(result)  
}


run()