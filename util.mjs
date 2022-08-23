import util from 'util';

const firstName = 'ivan'
const lastName = 'ardiansyah'

console.log(`Hello ${firstName} ${lastName}`)
console.log(util.format('Hello %s %s', firstName, lastName))

const myJson = {
  firstName: 'ivan',
  lastName: 'ardiansyah'
}

console.log(util.format('myJson %j', myJson))