import React from 'react';
import data from '../_config/products.json';
import ProductCard from './product-card';

const Zipper = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {data
        .filter((item) => item.category === 'zipper')
        .map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
    </div>
  );
};

export default Zipper;
