import BrandLogo from '@/components/brand-logo';
import React from 'react';
import NavMenu from '../nav-menu/index.';

const DesktopNavbar = () => {
  return (
    <aside className='hidden flex-[0_0_280px] 2xl:flex-[0_0_300px] border-r p-4 2xl:p-8 lg:flex flex-col gap-12'>
      <BrandLogo />
      <div>
        <NavMenu />
      </div>
    </aside>
  );
};

export default DesktopNavbar;
