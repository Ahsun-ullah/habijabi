import mongoose from 'mongoose'
import { ICommonErrorTypes } from '../interfaces/commonErrorTypes'
import { IGenericErrorMsg } from '../interfaces/genericErrorMsg'

const handleCastError = (
  error: mongoose.Error.CastError,
): ICommonErrorTypes => {
  const allErrors: IGenericErrorMsg[] = [
    {
      path: error?.path,
      message: error?.message,
    },
  ]
  const statusCode = 400
  return {
    statusCode,
    message: 'Cast Error !',
    errorMessages: allErrors,
  }
}

export default handleCastError
