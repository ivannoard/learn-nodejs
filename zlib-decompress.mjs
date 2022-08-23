import fs from 'fs'
import zlib from 'zlib'

const readFile = fs.readFileSync('zlib-compress.mjs.txt')
const decompress = zlib.unzipSync(readFile)

console.info(decompress.toString())