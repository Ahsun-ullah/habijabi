import express from 'express';
import { usersController } from './users.controller';

const router = express.Router();

router.post('/create-admin', usersController.createAdmin);

export const userRoutes = {
  router,
};
