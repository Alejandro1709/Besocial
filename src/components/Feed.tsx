import Post from './Post';
import type IPost from '@/types/post';
import { posts } from '@/data/feed';

const feed: IPost[] = posts;

function Feed() {
  return (
    <div className='flex flex-col gap-4 my-4'>
      {feed.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
