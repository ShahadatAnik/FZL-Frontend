import { cn } from '@/lib/utils';
import React from 'react';

const SectionTitle: React.FC<{ title: string; className?: string }> = ({
  title,
  className,
}) => {
  return (
    <h2
      className={cn(
        'text-lg lg:text-2xl text-left font-poppins bg-secondary px-4 lg:px-6 py-1.5 lg:py-3 border-l-4 border-accent',
        className
      )}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
