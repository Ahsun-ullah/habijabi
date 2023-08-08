import { ZodError, ZodIssue } from 'zod'
import { ICommonErrorTypes } from '../interfaces/commonErrorTypes'
import { IGenericErrorMsg } from '../interfaces/genericErrorMsg'

const handleZodError = (error: ZodError): ICommonErrorTypes => {
  const allErrors: IGenericErrorMsg[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })
  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error !',
    errorMessages: allErrors,
  }
}

export default handleZodError
