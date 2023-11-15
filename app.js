const express = require('express')
const app = express()

app.get('/about', (req, res) => {
  console.log('GET REQUEST PRA ABOUT')
})

app.post('/about', (req, res) => {
  console.log('POST REQUEST PRA ABOUT')
})

app.use('/', (req, res) => {
  res.send('HOME PAGE NI')
})

app.listen(5000, () => {
  console.log('server is listening in port 5000')
})
