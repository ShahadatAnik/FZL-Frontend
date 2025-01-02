import React from 'react';

const SectionTitle: React.FC<{
  title: string;
  description?: string;
}> = ({ title, description }) => {
  return (
    <div className='text-center max-w-[600px] mx-auto'>
      <h2 className='text-2xl xl:text-4xl font-semibold font-poppins leading-normal'>
        {title}
      </h2>
      {description && (
        <p className='mt-1 text-muted-foreground'>{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
