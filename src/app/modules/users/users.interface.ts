import { Model } from 'mongoose'

export type IUser = {
  role: string
  password: string
}

export type userModel = Model<IUser, Record<string, unknown>>
