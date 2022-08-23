import timer from 'timers/promises'

// get data from setTimeout
console.info('first')
const name = await timer.setTimeout(5000, 'ivan')
console.info('thx for waiting 5sec')
console.info(name)

/*
for await (const startTime of timer.setInterval(1000)) {
  console.info(new Date())
}
*/

/*
// promise setTimeout
console.info('first')
await timer.setTimeout(5000)
console.info('thx for waiting 5sec')
*/

// non promise
/* 
setInterval(() => {
  console.log(new Date())
}, 1000)
*/