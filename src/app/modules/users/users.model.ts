import { Schema, model } from 'mongoose';
import { IUser, userModel } from './users.interface';

const userSchema = new Schema<IUser, userModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true, select: 0 },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const user = model<IUser, userModel>('user', userSchema);

export const userModelSchema = {
  user,
};
