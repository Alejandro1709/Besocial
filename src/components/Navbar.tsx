import Link from 'next/link';

function Navbar() {
  return (
    <nav
      className='sticky top-0 flex justify-between items-center h-14 border-b bg-white'
      role='navigation'
    >
      <div className='flex flex-row justify-between items-center w-full md:mx-16 mx-4'>
        <div className='flex flex-row justify-start'>
          <Link href='/'>
            <h2 className='text-2xl font-medium select-none'>Logo</h2>
          </Link>
        </div>
        <div className='flex flex-row'>
          <Link
            href='/login'
            className='bg-transparent border-2 border-blue-500 p-1 px-2 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition-all'
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
