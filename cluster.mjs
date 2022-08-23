import cluster from 'cluster'
import http from 'http'
import os from 'os'
import process from 'process'

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }
  cluster.addListener('exit', (worker) => {
    console.info(`worker ${worker.id} exited`)
    cluster.fork()
  })
}

if (cluster.isWorker) {
  console.log(`worker: ${process.pid}`)
  const server = http.createServer((req, res) => {
    res.write(`response from ${process.pid}`)
    res.end()
    process.exit()
  })
  server.listen(3000)
  console.info(`start cluster worker ${process.pid}`)
}