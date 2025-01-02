import React from 'react';
import { socialLinks } from '../_const/footer-data';
import Link from 'next/link';
import Image from 'next/image';

const Socials = () => {
  return (
    <div className='flex gap-2'>
      {socialLinks.map((item, index) => (
        <Link target='_blank' href={item.href} key={index}>
          <Image src={item.image} alt={item.title} width={40} height={40} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
