import zlib from 'zlib';
import fs from 'fs'

const readFile = fs.readFileSync('zlib-compress.mjs')
const compress = zlib.gzipSync(readFile)

fs.writeFileSync('zlib-compress.mjs.txt', compress)