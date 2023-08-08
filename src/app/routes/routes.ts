import express from 'express'
import { userRoutes } from '../modules/users/users.route'
import { adminRoutes } from '../modules/admin/admin.routes'
import { blogRoutes } from '../modules/blog/blog.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes.router,
  },
  {
    path: '/admins',
    route: adminRoutes.router,
  },
  {
    path: '/blogs',
    route: blogRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
