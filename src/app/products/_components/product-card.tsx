'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Image from 'next/image';
import { IProduct } from '@/types';
import Link from 'next/link';

const ProductCard: React.FC<{ data: IProduct }> = ({ data }) => {
  return (
    <Card className='w-full bg-white flex flex-col justify-between'>
      <div>
        <CardHeader className='p-2'>
          <Image
            className='rounded-md object-cover'
            src={data.image}
            alt='product'
            width={500}
            height={500}
          />
        </CardHeader>
        <CardContent className=' mt-2 space-y-2'>
          <Link href={`/products/${data.uuid}`} className='hover:underline'>
            <CardTitle className='text-center leading-normal text-lg '>
              {data.title}
            </CardTitle>
          </Link>
          <CardDescription className='text-center line-clamp-3'>
            {data.description}
          </CardDescription>
        </CardContent>
      </div>
      <CardFooter className='flex justify-center'>
        <Link href={`/products/${data.uuid}`}>
          <Button
            variant={'outline'}
            className='hover:bg-primary hover:text-white'
          >
            See Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
