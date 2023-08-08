import express from 'express'
import { blogController } from './blog.controller'

const router = express.Router()

router.post('/create-blog', blogController.createBlog)

export const blogRoutes = {
  router,
}
