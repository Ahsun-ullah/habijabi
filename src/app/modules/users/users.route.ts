import express from 'express'
import { usersController } from './users.controller'

const router = express.Router()

router.post('/create-users', usersController.createUsers)

export const userRoutes = {
  router,
}
