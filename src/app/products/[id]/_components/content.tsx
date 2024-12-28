'use client';

import React from 'react';
import Hero from './hero';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Specifications from './specifications';
import Description from './description';
import Details from './details';

const tabs = [
  {
    title: 'Specifications',
    value: 'specifications',
    content: <Specifications />,
  },
  {
    title: 'Description',
    value: 'description',
    content: <Description />,
  },
  {
    title: 'Product Details',
    value: 'product-details',
    content: <Details />,
  },
];

const Content = () => {
  return (
    <div className='max-w-[1200px] space-y-10'>
      <Hero />
      <div>
        <Tabs defaultValue={tabs[0].value} className='w-full'>
          <TabsList className='grid w-full grid-cols-3 max-w-[800px]'>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent className='pt-4' key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Content;
