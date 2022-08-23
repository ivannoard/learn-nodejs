import { URL } from 'url'

const mywebsite = new URL('https://www.ivannportfolio.herokuapp.com/profile')

console.info(mywebsite.host)
console.info(mywebsite.hash)
console.info(mywebsite.origin)
console.info(mywebsite.pathname)
console.info(mywebsite.port)
console.info(mywebsite.protocol)
console.info(mywebsite.searchParams)