// import { Server } from "http";
import mongoose from 'mongoose'
import config from './config'
import app from './app'

// let server: Server;

const main = async () => {
  try {
    await mongoose.connect(config.dataBaseUrl as string)
    console.log(`📶 Database is connected successfully`)

    app.listen(config.port, () => {
      console.log(`App is running on ${config.port}`)
    })
  } catch (error) {
    console.log('Failed to connect server', error)
  }
}

main()
