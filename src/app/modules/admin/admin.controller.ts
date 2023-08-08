import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'
import { adminsServices } from './admin.services'

const createAdmins: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...admins } = req.body
    const result = adminsServices.createAdminsDB(admins)

    sendResponse(res, {
      StatusCode: StatusCodes.OK,
      success: true,
      message: 'Admin created Successfully !',
      data: result,
    })
  },
)

export const adminControllers = {
  createAdmins,
}
