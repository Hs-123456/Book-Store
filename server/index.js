const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./router/router')

const cors = require('cors')


const app = express()
const port = 5000
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.use('/', routes);


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })