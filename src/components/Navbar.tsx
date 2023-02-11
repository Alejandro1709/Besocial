import Link from 'next/link';

function Navbar() {
  return (
    <nav
      className='sticky top-0 flex justify-between items-center h-14 border-b bg-white transition-all'
      role='navigation'
    >
      <div className='flex flex-row justify-between items-center w-full md:mx-16 mx-4'>
        <div className='flex flex-row justify-start'>
          <Link href='/'>
            <h2 className='text-2xl font-medium select-none'>Logo</h2>
          </Link>
        </div>
        <div className='flex flex-row'>
          <button className='bg-blue-400 p-1 px-2 text-white hover:bg-blue-500 rounded'>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
