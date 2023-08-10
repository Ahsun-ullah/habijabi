import { Model, Types } from 'mongoose';
import { IAdmin } from '../admin/admin.interface';

export type IUser = {
  name: string;
  email: string;
  role: string;
  password: string;
  admin?: Types.ObjectId | IAdmin;
};

export type userModel = Model<IUser, Record<string, unknown>>;
