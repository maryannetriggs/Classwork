// const fs = require('fs')

// fs.writeFile('hello.txt', 'Hey MAT', (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('file was created')
//   }
// })

// fs.readFile('hello.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data.toString())
//   }
// })

const http = require('http')
const app = http.createServer()

app.on('request', (req, res) => {
  res.setHeader('Content-type', 'application/json')
  res.end('Hello world!')
})


app.listen(4000, () => console.log('App is listening on port 4000'))

