import { Schema, model } from 'mongoose'
import { IAdmin, adminModel } from './admin.interface'

const adminSchema = new Schema<IAdmin>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: 0 },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

const admin = model<IAdmin, adminModel>('admin', adminSchema)

export const adminModelSchema = {
  admin,
}
