import { Schema, model } from 'mongoose';
import { IBlog, blogModel } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    social_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

const blog = model<IBlog, blogModel>('blog', blogSchema);

export const blogModelSchema = {
  blog,
};
