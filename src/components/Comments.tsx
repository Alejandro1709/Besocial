import Button from './Button';

function Comments() {
  return (
    <div className='flex flex-col gap-4 my-4'>
      <article className='flex flex-col gap-2 p-4 bg-white rounded-md border cursor-pointer'>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <img
              src='https://picsum.photos/200'
              alt='John Doe'
              className='w-10 h-10 rounded-full'
            />
            <div className=''>
              <h1 className='font-medium text-gray-700'>John Doe</h1>
              <p className='text-gray-500 text-sm'>2 hours ago</p>
            </div>
          </div>
          <div className='flex flex-row gap-2 items-center'>
            <Button type='primary'>Edit</Button>
            <Button type='danger'>Delete</Button>
          </div>
        </div>
        <p className='text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>
      </article>
    </div>
  );
}

export default Comments;
