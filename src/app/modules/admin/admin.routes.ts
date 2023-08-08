import express from 'express'
import { adminControllers } from './admin.controller'

const router = express.Router()

router.post('/create-admin', adminControllers.createAdmins)

export const adminRoutes = {
  router,
}
