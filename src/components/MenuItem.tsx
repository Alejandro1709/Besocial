import Link from 'next/link';

type MenuItemProps = {
  link: {
    name: string;
    href: string;
    icon: React.ReactNode;
    active: boolean;
  };
};

function MenuItem({ link }: MenuItemProps) {
  return (
    <li
      className={`text-lg font-medium ${
        link.active ? 'bg-blue-500 text-white' : null
      } p-2 rounded hover:bg-blue-500 hover:text-white cursor-pointer`}
      role='listitem'
    >
      <Link className='flex flex-row items-center gap-1' href={link.href}>
        {link.icon}
        {link.name}
      </Link>
    </li>
  );
}

export default MenuItem;
