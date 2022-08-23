import { EventEmitter } from 'events'

const emitter = new EventEmitter()

emitter.addListener('hello', (name) => {
  console.info('hello ' + name)
})

emitter.addListener('hello', (name) => {
  console.info('hello ', name)
})

emitter.emit('hello', 'eko')