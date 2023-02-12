import Button from './Button';
import type IPost from '@/types/post';

type PostProps = {
  post: IPost;
};

function Post({ post }: PostProps) {
  return (
    <article className='flex flex-col gap-2 p-4 bg-white rounded-md border cursor-pointer'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row gap-2 items-center'>
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className='w-10 h-10 rounded-full'
          />
          <div className=''>
            <h1 className='font-medium text-gray-700'>{post.author.name}</h1>
            <p className='text-gray-500 text-sm'>2 hours ago</p>
          </div>
        </div>
        <div className='flex flex-row items-center'>
          <Button>Follow</Button>
        </div>
      </div>
      <p className='text-gray-700'>{post.content}</p>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center'>
          <button className='flex flex-row items-center'>Like</button>
          <button className='flex flex-row items-center ml-4'>Comment</button>
        </div>
      </div>
    </article>
  );
}

export default Post;
