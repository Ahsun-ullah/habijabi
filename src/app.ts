import express, { Application } from 'express'
import cors from 'cors'

const app: Application = express()

// cors
app.use(cors())

//middleware
// app.use(express.raw());
// app.use(express.text());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/v1/', (req, res) => {
  // console.log(req.body)
  // console.log(req.body.toString());
  res.send('This is the express server ')
})

export default app
