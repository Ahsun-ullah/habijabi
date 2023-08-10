import express from 'express';
import { adminControllers } from './admin.controller';

const router = express.Router();

router.get('/create-admin', adminControllers.createAdmins);

export const adminRoutes = {
  router,
};
