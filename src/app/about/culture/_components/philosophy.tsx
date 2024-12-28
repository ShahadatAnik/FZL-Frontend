import React from 'react';
import data from '../_const/philosophy-data.json';
import PhilosophyCard from './philosophy-card';

const Philosophy = () => {
  return (
    <div>
      <h3 className='text-2xl font-poppins bg-primary text-white py-4 px-8 border-l-8 border-accent'>
        Philosophy
      </h3>
      <p className='mt-4 text-base leading-relaxed'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        incidunt dicta commodi sunt dignissimos voluptates illum nobis expedita
        sapiente. Quas quibusdam animi, harum dolore tempore assumenda vero
        recusandae cum dolores. Rerum blanditiis nulla placeat est quibusdam
        accusamus, ea amet possimus temporibus quos tempore excepturi id
        consequatur aut, necessitatibus laudantium odio. A repudiandae laborum
        repellendus aspernatur fugiat, porro corrupti asperiores, adipisci ad
        sint excepturi omnis vero itaque voluptatem ut libero velit, nostrum
        praesentium. Hic non corporis quae rerum corrupti inventore officiis
        error blanditiis, aliquam eum nulla, debitis veniam iusto eligendi
        commodi alias unde itaque est? Deleniti quam ipsum vitae alias nulla.
      </p>

      <div className=' my-10 max-w-[960px] space-y-12'>
        {data.map((item, index) => (
          <PhilosophyCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Philosophy;
