import IAuthor from '@/types/author';

const authors: IAuthor[] = [
  {
    id: '56',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: '123456',
    avatar: 'https://picsum.photos/200',
    createdAt: new Date().toLocaleDateString(),
  },
];

export default authors;
