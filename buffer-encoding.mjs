const buffer = Buffer.from('ivannoard', 'utf-8')

console.info(buffer.toString())
console.info(buffer.toString('hex'))
console.info(buffer.toString('base64'))
console.info(buffer.toString('base64url'))

const bufferHex = Buffer.from('6976616e6e6f617264', 'hex')

console.info(bufferHex.toString('utf-8'))