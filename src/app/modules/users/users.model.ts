import { Schema, model } from 'mongoose'
import { IUser, userModel } from './users.interface'

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true, select: 0 },
})

const user = model<IUser, userModel>('user', userSchema)

export const userModelSchema = {
  user,
}
