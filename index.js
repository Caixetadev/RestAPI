const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()
const personRoutes = require('./routes/personRoutes')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

app.use(
  express.urlencoded({ extended: true })
)


app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.use(express.json())
app.use('/person', personRoutes)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.ihcfy.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Conectamos ao MongoDB")
    app.listen(3000)
  })
  .catch(e => console.log(e))