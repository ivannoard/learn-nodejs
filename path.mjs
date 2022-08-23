/*
  path digunakan untuk lokasi file atau directory file
  contoh: /home/ivan/belajar-bahasa/web-programming-BE/pzn/nodejs
*/

import path from 'path'

const file = '/home/ivan/belajar-bahasa/web-programming-BE/file.html'

console.info(path.sep)
console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
console.info(path.parse(file))
