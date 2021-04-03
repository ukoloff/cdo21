const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', Hi)
  .listen(PORT, _ => console.log(`Listening on ${ PORT }`))

function Hi(req, res) {
  res.end("Hello, world!")
}
