'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import BrandLogo from '@/components/brand-logo';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import NavMenu from '../nav-menu/index.';

const MobileNavbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn(
        'lg:hidden bg-white/70 backdrop-blur-lg px-8 py-3',
        pathName === '/' ? 'absolute top-0 left-0 right-0 z-50' : '',
        pathName !== '/' ? 'shadow-lg' : ''
      )}
    >
      <div className='flex items-center justify-between'>
        <BrandLogo />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className=' w-full sm:max-w-full' side={'right'}>
            <div className='flex flex-col  px-4 gap-y-8'>
              <div className='flex justify-center'>
                <BrandLogo onClick={() => setOpen(false)} />
              </div>
              <NavMenu onClick={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MobileNavbar;
