'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { INavLink } from '@/types';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const NavItem: React.FC<{ item: INavLink; onClick?: () => void }> = ({
  item,
  onClick,
}) => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  const isActive =
    pathName === item.href ||
    (item.children?.some((child) => child.href === pathName) && open);

  if (item.children) {
    return (
      <div>
        <Button
          onClick={() => setOpen((prev) => !prev)}
          className='w-full flex items-center justify-between font-semibold'
          variant={isActive === true ? 'accent' : 'link'}
        >
          {item.title}

          <ChevronDown
            className={cn(
              'size-5 transition-transform duration-200 ease-in',
              open ? 'rotate-180' : ''
            )}
          />
        </Button>

        {open && (
          <ul className='pl-4'>
            {item.children.map((child) => {
              const isChildActive = child.href === pathName;
              return (
                <li key={child.href}>
                  {child.href && (
                    <Link
                      onClick={onClick}
                      className={cn(
                        buttonVariants({
                          variant: 'link',
                          className: cn(
                            'w-full justify-start',
                            isChildActive && 'text-accent font-bold'
                          ),
                        })
                      )}
                      href={child.href}
                    >
                      {child.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }

  if (item.href) {
    return (
      <Link
        onClick={onClick}
        className={cn(
          buttonVariants({
            variant: isActive ? 'accent' : 'link',
            className: 'w-full justify-start font-semibold',
          })
        )}
        href={item.href}
      >
        {item.title}
      </Link>
    );
  }
};

export default NavItem;
