import { Console } from 'console'
import fs from 'fs'

const logFile = fs.createWriteStream('application.log')

const log = new Console({
  stdout: logFile,
  stderr: logFile
})

log.info('haloo')
log.error('ini error')

const person = {
  firstName: 'ivan',
  lastName: 'nova'
}

log.table(person)