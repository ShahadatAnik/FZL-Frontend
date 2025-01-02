import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BrandLogo: React.FC<{ onClick?: () => void; className?: string }> = ({
  onClick,
  className,
}) => {
  return (
    <Link onClick={onClick} href='/'>
      <div
        className={cn('w-[80px] lg:w-full relative aspect-video', className)}
      >
        <Image
          className='object-contain'
          src='/brand-logo.png'
          alt='logo'
          fill
        />
      </div>
    </Link>
  );
};

export default BrandLogo;
