import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className=' grid lg:grid-cols-3 gap-10 '>
      <div className=' col-span-1'>
        <div className='w-full aspect-square relative'>
          <Image fill src={'/placeholder.svg'} alt={'Image'} />
        </div>
      </div>
      <div className='col-span-2'>
        <h2 className='text-3xl font-poppins font-medium'>
          Light-weight Waterproof Nylon Zipper
        </h2>
        <p className='mt-4 text-base '>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam modi
          sequi nostrum veritatis quos, officiis dolor quod facilis cum expedita
          perferendis laboriosam totam corporis vel vero, illum non enim velit
          possimus eius magni. Sed eaque laudantium totam sapiente, provident in
          officia magni placeat cupiditate. Reiciendis, ut. Ullam hic inventore
          deleniti explicabo! Ratione ipsum totam nobis obcaecati sed asperiores
          fugit voluptatum rerum maxime commodi enim, in atque, deserunt
          molestiae quia laboriosam ducimus autem perspiciatis quam, cum ipsam
          sint sit explicabo? Vitae, voluptate laboriosam explicabo tempora
          reprehenderit voluptatem atque est accusantium voluptatibus id soluta
          sed illo nihil cumque ea, a dolorum expedita.
        </p>

        <Button className='mt-8'>Contact Us</Button>
      </div>
    </div>
  );
};

export default Hero;
