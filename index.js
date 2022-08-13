import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
const mongoString = process.env.DATABASE_URL
import { postProfile,getProfileWithID } from './controller/profileController.js'

const app = express()

mongoose.connect(mongoString)
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database connected')
})

const port = 3001
app.listen(process.env.PORT || port , () => {
  console.log(`Server running on: ${port}`)
})

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  try {
    res.status(200).send('hello from /')
  } catch (error) {
    next(error)
  }
})

app.post('/image',
  postProfile
)

app.get('/:id',
getProfileWithID
)
