'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/4 1header-log.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faGlobe,
  faHome,
  faIdBadge,
  faScissors,
  faSearch,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Set active link based on current path
    const currentPath = pathname.split('/')[1] || 'home';
    setActiveLink(currentPath === '' ? 'home' : currentPath);
  }, [pathname]);

  return (
    <nav className='flex justify-between items-center px-4 md:px-20 bg-white sticky top-0 z-10 w-full h-[80px] font-poppins uppercase text-primary py-4 md:py-12'>
      {/* Logo */}
      <div className='logo'>
        <Link href='/'>
          <Image src={logo} alt='logo' className='w-[100px] md:w-[120px]' />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-primary text-2xl'>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Desktop Menus */}
      <div className='hidden md:flex menus'>
        <ul className='flex gap-6 lg:gap-10'>
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              {...item}
              isActive={activeLink === item.activeKey}
            />
          ))}
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className='hidden md:flex buttons'>
        <div className='flex items-center'>
          <input
            type='search'
            placeholder='search'
            className='bg-slate-100 rounded-sm outline-none pl-2 py-1 text-sm md:text-base'
          />
          <FontAwesomeIcon
            icon={faSearch}
            className='pl-1 text-xl md:text-2xl cursor-pointer text-primary'
          />
          <span className='px-3 md:px-5 text-primary text-sm md:text-base'>
            US (EN)
          </span>
          <FontAwesomeIcon
            icon={faGlobe}
            className='cursor-pointer text-primary text-xl md:text-2xl'
          />
        </div>
      </div>

      {/* Mobile Menu (shown when toggled) */}
      {isOpen && (
        <div className='md:hidden absolute top-[80px] left-0 right-0 bg-white shadow-lg py-4 px-6'>
          <ul className='flex flex-col gap-4'>
            {navItems.map((item) => (
              <MobileNavItem
                key={item.name}
                {...item}
                isActive={activeLink === item.activeKey}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </ul>
          <div className='mt-4 flex items-center'>
            <input
              type='search'
              placeholder='search'
              className='bg-slate-100 rounded-sm outline-none pl-2 py-1 text-sm flex-grow'
            />
            <FontAwesomeIcon
              icon={faSearch}
              className='pl-1 text-xl cursor-pointer text-primary'
            />
          </div>
          <div className='flex items-center mt-4'>
            <span className='text-primary text-sm'>US (EN)</span>
            <FontAwesomeIcon
              icon={faGlobe}
              className='ml-2 cursor-pointer text-primary text-xl'
            />
          </div>
        </div>
      )}
    </nav>
  );
};

// NavItem component with active state
const NavItem = ({ icon, name, href, isActive, activeKey }) => (
  <li
    className={`transition-all duration-[0.5s] hover:scale-[1.1] ${
      isActive ? 'border-b-2 border-primary' : ''
    }`}>
    <span className='pr-1'>
      <FontAwesomeIcon
        icon={icon}
        className={`cursor-pointer ${
          isActive ? 'text-secondary' : 'text-primary'
        }`}
      />
    </span>
    <Link
      href={href}
      className={`${
        isActive ? 'text-secondary font-semibold' : 'text-primary'
      }`}>
      {name}
    </Link>
  </li>
);

// MobileNavItem component with active state
const MobileNavItem = ({ icon, name, href, isActive, onClick }) => (
  <li
    className={`transition-all duration-[0.5s] px-2 py-1 rounded ${
      isActive ? 'bg-primary text-white' : 'hover:bg-gray-50'
    }`}>
    <Link
      href={href}
      className={`flex items-center ${
        isActive ? 'text-white' : 'text-primary'
      }`}
      onClick={onClick}>
      <FontAwesomeIcon icon={icon} className='mr-2' />
      {name}
    </Link>
  </li>
);

// Navigation items data with active keys
const navItems = [
  { icon: faHome, name: 'Inicio', href: '/', activeKey: 'home' },
  {
    icon: faScissors,
    name: 'Services',
    href: '/services',
    activeKey: 'services',
  },
  { icon: faBuilding, name: 'About Us', href: '/about', activeKey: 'about' },
  {
    icon: faIdBadge,
    name: 'Contact Us',
    href: '/contact',
    activeKey: 'contact',
  },
];

export default NavBar;
