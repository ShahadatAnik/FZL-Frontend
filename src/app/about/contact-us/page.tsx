import React from 'react';
import Hero from './_components/hero';
import ContactForm from './_components/contact-form';

const Page = () => {
  return (
    <>
      <Hero />
      <div className='px-8 py-12 lg:p-20'>
        <div className='max-w-[800px] mx-auto lg:mx-0 '>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
