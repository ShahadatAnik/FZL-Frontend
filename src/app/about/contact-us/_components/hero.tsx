import React from 'react';

import { Mail, Phone } from 'lucide-react';
import Map from './map';

const Hero = () => {
  return (
    <section className='px-8 py-12 lg:p-20  bg-slate-50'>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-[1400px]'>
        <div className=' space-y-8 lg:space-y-12'>
          <div className='max-w-[400px]'>
            <h2 className='text-4xl lg:text-6xl font-medium font-poppins'>
              Contact Us
            </h2>
            <div className='mt-4 space-y-4'>
              <p className='text-muted-foreground'>
                Email, call or complete the form to learn how FZL can solve your
                problem.
              </p>
              <p className='text-muted-foreground flex items-center gap-2'>
                <Mail className='size-5' />
                info@fortunzipperbd.com
              </p>
              <p className='text-muted-foreground flex items-center gap-2'>
                <Phone />
                +88-01322915277
              </p>
            </div>
          </div>

          <div className='max-w-[540px]'>
            <h4 className='text-2xl lg:text-3xl font-medium font-poppins'>
              Manufacturing Facilities
            </h4>

            <div className='mt-4  space-y-4'>
              <div className='space-y-1'>
                <p className='text-lg text-foreground font-medium'>
                  Fortune Zipper Limited
                </p>
                <p className='text-muted-foreground font-light'>
                  Plot- 211-212, BPMI Bhaban, Road- 03, Janata Housing, Shah Ali
                  Bug, Mirpur-2, Dhaka 1216, Bangladesh
                </p>

                <p className='text-muted-foreground font-light'>
                  Ph: +88-01322915277
                </p>
              </div>

              <div className='space-y-1'>
                <p className='text-lg text-foreground font-medium'>
                  Fortune Zipper Factory
                </p>
                <p className='text-muted-foreground font-light'>
                  Zipper Factory Road, Auk Para, Ashulia, Savar, Dhaka,
                  Bangladesh.
                </p>

                <p className='text-muted-foreground font-light'>
                  Ph: +88-01625938925
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full aspect-square'>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Hero;
