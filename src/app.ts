import express, { Application } from 'express'
import cors from 'cors'
import router from './app/routes/routes'

const app: Application = express()

// cors
app.use(cors())

//middleware
// app.use(express.raw());
// app.use(express.text());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', router)

export default app
