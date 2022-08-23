import https from 'https'

const endpoint = 'https://hookb.in/aB7gYxmD3aUXdbBXLEoy'
const request = https.request(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}, (response) => {
  response.addListener('data', (message) => {
    console.info('Receive Data: ', message.toString())
  })
})

const body = JSON.stringify({
  firstName: 'John',
  lastName: 'Doe',
})

request.write(body)
request.end()