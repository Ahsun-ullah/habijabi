/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler, Request, Response } from 'express'
import config from '../../config'
import handleValidationError from '../../error/validationError'
import handleCastError from '../../error/castError'
import { IGenericErrorMsg } from '../../interfaces/genericErrorMsg'
import ApiError from '../../error/apiError'

const globalErrorHandler: ErrorRequestHandler = (
  error,
  req: Request,
  res: Response,
) => {
  config.env === 'development'
    ? console.log('🚀🚀 GlobalError ~', error)
    : console.error('🚀🚀 GlobalError ~', error)

  let statusCode = 500
  let message = 'Something went wrong !'
  let errorMessage: IGenericErrorMsg[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessage = simplifiedError?.errorMessages
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error)
    statusCode = simplifiedError?.statusCode
    message = simplifiedError?.message
    errorMessage = simplifiedError?.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errorMessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }
  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
}

export default globalErrorHandler
