import Post from './Post';

function Comments() {
  const comment = {
    id: '3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam',
    author: {
      id: 'e3',
      name: 'John Doe',
      avatar: 'https://picsum.photos/200',
      email: '',
      password: '',
      createdAt: '14/02/2023',
    },
    likes: 0,
    comments: 0,
    createdAt: '14/02/2023',
  };

  return (
    <div className='flex flex-col gap-4 my-4'>
      <Post post={comment} type='post' />
    </div>
  );
}

export default Comments;
