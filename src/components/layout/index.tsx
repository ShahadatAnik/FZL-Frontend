import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='h-screen flex flex-col lg:flex-row overflow-hidden relative'>
      <Navbar />
      <div className='flex-1 h-full overflow-auto flex flex-col justify-between'>
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
