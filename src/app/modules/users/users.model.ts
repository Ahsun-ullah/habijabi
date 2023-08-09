import { Schema, model } from 'mongoose'
import { IUser, userModel } from './users.interface'

const userSchema = new Schema<IUser>(
  {
    role: { type: String, required: true },
    password: { type: String, required: true, select: 0 },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

const user = model<IUser, userModel>('user', userSchema)

export const userModelSchema = {
  user,
}
