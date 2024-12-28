'use client';

import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Zipper from './zipper';
import SewingThread from './sewing-thread';
import All from './all';

interface ITab {
  title: string;
  value: string;
  content: React.ReactNode | string;
}

const tabs: ITab[] = [
  {
    title: 'All',
    value: 'all',
    content: <All />,
  },
  {
    title: 'Zipper',
    value: 'zipper',
    content: <Zipper />,
  },
  {
    title: 'Sewing Thread',
    value: 'sewing-thread',
    content: <SewingThread />,
  },
];

const Content = () => {
  return (
    <div>
      <Tabs defaultValue={tabs[0].value} className='w-full'>
        <TabsList className='grid w-full grid-cols-3 max-w-[600px] mx-auto'>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent className='pt-8' key={tab.value} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Content;
