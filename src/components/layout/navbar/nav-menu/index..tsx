import { navLinks } from '@/config/nav-links';
import React from 'react';
import NavItem from './nav-item';

const NavMenu: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <nav className='flex flex-col gap-1'>
      {navLinks.map((link, index) => {
        return <NavItem key={index} item={link} onClick={onClick} />;
      })}
    </nav>
  );
};

export default NavMenu;
