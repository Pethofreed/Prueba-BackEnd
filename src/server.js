require('dotenv').config()
const morgan = require('morgan')
const express = require('express')
const studentsRouter = require('./route/student')

const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api', studentsRouter)

app.listen(port, () => {
  console.log(`Àpp running at port ${port}`)
})