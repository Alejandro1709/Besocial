import authors from './users';
import type IPost from '@/types/post';

export const posts: IPost[] = [
  {
    id: '22',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies tincidunt, nunc nisl ultricies nisl, nec ultricies nunc nisl vel nisl. Sed euismod, nisl vel ultricies tincidunt, nunc nisl ultricies nisl, nec ultricies nunc nisl vel nisl.',
    author: authors[0],
    likes: 4,
    comments: 2,
    createdAt: new Date().toLocaleDateString(),
  },
];
