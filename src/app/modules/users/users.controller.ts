import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import { userService } from './users.service';
import { IUser } from './users.interface';

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { admin, ...userData } = req.body;
    const result = await userService.createAdminDB(admin, userData);

    sendResponse<IUser>(res, {
      StatusCode: StatusCodes.OK,
      success: true,
      message: 'successfully created user as admin !',
      data: result,
    });
  },
);

export const usersController = {
  createAdmin,
};
