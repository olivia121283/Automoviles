var express = require('express')
const db = require('./config/bd.js')
const routes = require('./routes/index.js')

var app = express()
app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log("El servidor esta corriendo en el 3000")
})