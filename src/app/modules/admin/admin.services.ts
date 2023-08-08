import { IAdmin } from './admin.interface'
import { adminModelSchema } from './admin.model'

const createAdminsDB = async (admin: IAdmin) => {
  const result = adminModelSchema.admin.create(admin)
  return result
}

export const adminsServices = {
  createAdminsDB,
}
