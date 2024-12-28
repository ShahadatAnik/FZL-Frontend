import React from 'react';
import Navbar from './navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen flex flex-col lg:flex-row overflow-hidden'>
      <Navbar />
      <div className='flex-1 h-full overflow-auto'>{children}</div>
    </div>
  );
};

export default Layout;
