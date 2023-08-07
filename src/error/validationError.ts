import mongoose from 'mongoose'
import { IGenericErrorMsg } from '../interfaces/genericErrorMsg'
import { ICommonErrorTypes } from '../interfaces/commonErrorTypes'

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): ICommonErrorTypes => {
  const allErrors: IGenericErrorMsg[] = Object.values(error.errors).map(
    (element: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: element?.path,
        message: element?.message,
      }
    },
  )
  const statusCode = 400
  return {
    statusCode,
    message: 'validation Error !',
    errorMessages: allErrors,
  }
}

export default handleValidationError
