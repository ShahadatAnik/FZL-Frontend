import { cn } from '@/lib/utils';
import React from 'react';

const SectionContainer: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <section className={cn('py-6 lg:py-12', className)}>{children}</section>
  );
};

export default SectionContainer;
