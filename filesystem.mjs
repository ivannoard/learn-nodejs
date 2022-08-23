import fs from 'fs/promises'

const buffer = await fs.readFile('os.mjs')

console.info(buffer.toString())

await fs.writeFile('temp.txt','hello from text')
