'use client';

import React from 'react';
import { footerLinks } from '../_const/footer-data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const FooterLinks = () => {
  const pathName = usePathname();
  return (
    <div className='w-[400px] grid grid-cols-1 lg:grid-cols-2 gap-2'>
      <div className='flex flex-col space-y-1 lg:space-y-2'>
        {footerLinks.slice(0, 4).map((item, index) => (
          <Link
            className={cn(
              'text-base lg:text-lg text-gray-500 font-poppins hover:underline',
              pathName === item.href && 'text-accent underline'
            )}
            key={index}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className='flex flex-col space-y-1 lg:space-y-2'>
        {footerLinks.slice(4, 8).map((item, index) => (
          <Link
            className={cn(
              'text-base lg:text-lg text-gray-500 font-poppins hover:underline',
              pathName === item.href && 'text-accent underline'
            )}
            key={index}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
