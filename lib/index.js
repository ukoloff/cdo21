const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .get('/', Hi)
  .get("/env", env)
  .listen(PORT, _ => console.log(`Listening on ${ PORT }`))

function Hi(req, res) {
  res.end("Hello, world!")
}

function env(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(process.env))
}
