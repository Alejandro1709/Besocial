import { HiOutlineHome } from 'react-icons/hi';
import { AiOutlineFire } from 'react-icons/ai';
import { SlMagnifier } from 'react-icons/sl';
import { AiOutlineBell } from 'react-icons/ai';
import MenuItem from './MenuItem';

function Menu() {
  const NAVIGATION_LINKS = [
    {
      name: 'Home',
      href: '/',
      icon: <HiOutlineHome />,
      active: true,
    },
    {
      name: 'Trending',
      href: '/trending',
      icon: <AiOutlineFire />,
      active: false,
    },
    {
      name: 'Explore',
      href: '/explore',
      icon: <SlMagnifier />,
      active: false,
    },
    {
      name: 'Notifications',
      href: '/notifications',
      icon: <AiOutlineBell />,
      active: false,
    },
  ];

  return (
    <ul className='flex flex-col gap-1 bg-white border-b' role='navigation'>
      {NAVIGATION_LINKS.map((link) => (
        <MenuItem key={link.name} link={link} />
      ))}
    </ul>
  );
}

export default Menu;
