import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../error/apiError';
import { IAdmin } from '../admin/admin.interface';
import { adminModelSchema } from '../admin/admin.model';
import { IUser } from './users.interface';
import { userModelSchema } from './users.model';
import mongoose from 'mongoose';

const createAdminDB = async (
  admin: IAdmin,
  userData: IUser,
): Promise<IUser | null> => {
  // ser role
  userData.role = 'admin';

  let newUserAllData = null;
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const newAdmin = await adminModelSchema.admin.create([admin], { session });
    if (!newAdmin.length) {
      throw new ApiError(StatusCodes.BAD_REQUEST, 'Failed to create Admin ');
    }

    userData.admin = newAdmin[0]._id;

    const newUser = await userModelSchema.user.create([userData], { session });
    if (!newUser.length) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        'Failed to create User as admin',
      );
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  if (newUserAllData) {
    newUserAllData = await userModelSchema.user
      .findOne({ _id: newUserAllData.id })
      .populate({
        path: 'admin',
        populate: [
          {
            path: 'blog',
          },
        ],
      });
  }

  return newUserAllData;
};

export const userService = {
  createAdminDB,
};
