import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { StatusCodes } from 'http-status-codes'
import { blogService } from './blog.service'

const createBlog: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...blogs } = req.body
    const result = await blogService.createBlogsDB(blogs)

    sendResponse(res, {
      StatusCode: StatusCodes.OK,
      success: true,
      message: 'Blogs created successfully !',
      data: result,
    })
  },
)
export const blogController = {
  createBlog,
}
