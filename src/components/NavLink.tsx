import Link from 'next/link';

type NavLinkProps = {
  href?: string;
  type?: 'default' | 'primary' | 'success' | 'danger';
  children: React.ReactNode;
};

function NavLink({ href = '/', type, children }: NavLinkProps) {
  const buttonType =
    type === 'default'
      ? 'bg-gray-200 hover:bg-gray-300'
      : type === 'primary'
      ? 'bg-blue-500 hover:bg-blue-600'
      : type === 'success'
      ? 'bg-green-500 hover:bg-green-600'
      : type === 'danger'
      ? 'bg-red-500 hover:bg-red-600'
      : 'bg-gray-200';

  return (
    <Link
      className={`${buttonType} text-white font-medium px-4 py-2 rounded-md`}
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
