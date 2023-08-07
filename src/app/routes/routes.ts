import express from 'express'
import { userRoutes } from '../modules/users/users.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
