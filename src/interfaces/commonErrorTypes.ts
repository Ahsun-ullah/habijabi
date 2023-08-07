import { IGenericErrorMsg } from './genericErrorMsg'

export type ICommonErrorTypes = {
  statusCode: number
  message: string
  errorMessages: IGenericErrorMsg[]
}
