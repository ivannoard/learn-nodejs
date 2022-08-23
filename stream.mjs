import fs from 'fs';

const writer = fs.createWriteStream('target.log')

writer.write('ivan\n')
writer.write('nova\n')
writer.write('ardiansyah\n')

const reader = fs.createReadStream('target.log')
reader.addListener('data', (data) => {
  console.info(data.toString())
})