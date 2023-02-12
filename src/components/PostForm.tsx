import Button from './Button';

function PostForm() {
  return (
    <form className='w-full p-4 border rounded-md bg-white overflow-hidden'>
      <textarea
        className='w-full text-gray-700 outline-none resize-none'
        name='post'
        id='post'
        placeholder="What's on your mind?"
      ></textarea>
      <div className='flex flex-row justify-end items-center'>
        <Button>Post</Button>
      </div>
    </form>
  );
}

export default PostForm;
