import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'
import { userService } from './users.service'

const createUsers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...user } = req.body
    const result = await userService.createUserDB(user)

    sendResponse(res, {
      StatusCode: StatusCodes.OK,
      success: true,
      message: 'successfully created user !',
      data: result,
    })
  },
)

export const usersController = {
  createUsers,
}
