import { Model } from 'mongoose'

export type IAdmin = {
  name: string
  email: string
  password: string
}

export type adminModel = Model<IAdmin, Record<string, unknown>>
