import http from 'http'

const server = http.createServer((req, res) => {
  console.info(req.method)
  console.info(req.url)
  res.write('hello from server')
  res.end()
})

server.listen(3000)