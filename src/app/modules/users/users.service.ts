import { IUser } from './users.interface'
import { userModelSchema } from './users.model'

const createUserDB = async (user: IUser) => {
  const result = await userModelSchema.user.create(user)
  return result
}

export const userService = {
  createUserDB,
}
