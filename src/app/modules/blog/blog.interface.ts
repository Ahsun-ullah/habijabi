import { Model } from 'mongoose'

export type IBlog = {
  //   image: string
  title: string
  author: string
  tags: string
  social_link: string
}

export type blogModel = Model<IBlog, Record<string, unknown>>
