import React from 'react';
import data from '../_const/products.json';
import ProductCard from './product-card';

const All = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {data.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </div>
  );
};

export default All;
