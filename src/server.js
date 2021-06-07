require('dotenv').config()
const morgan = require('morgan')
const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.listen(port, () => {
  console.log(`Àpp running at port ${port}`)
})