import authors from './users';
import type IPost from '@/types/post';

export const posts: IPost[] = [
  {
    id: '22',
    content: '',
    author: authors[0],
    likes: 4,
    comments: 2,
    createdAt: new Date().toLocaleDateString(),
  },
];
