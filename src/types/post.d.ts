import type IAuthor from './author';

export default interface IPost {
  id: string;
  content: string;
  author: IAuthor;
  createdAt: string;
  updatedAt?: string;
  likes: number;
  comments: number;
}
