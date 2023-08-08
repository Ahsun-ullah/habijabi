import { IBlog } from './blog.interface'
import { blogModelSchema } from './blog.model'

const createBlogsDB = async (blogs: IBlog) => {
  const result = await blogModelSchema.blog.create(blogs)
  return result
}

export const blogService = {
  createBlogsDB,
}
