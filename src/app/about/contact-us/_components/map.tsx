import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Map = () => {
  return (
    <Tabs defaultValue='office' className='w-full  h-full flex flex-col'>
      <TabsList className='w-full bg-slate-200'>
        <TabsTrigger className='flex-1' value='office'>
          Office
        </TabsTrigger>
        <TabsTrigger className='flex-1' value='factory'>
          Factory
        </TabsTrigger>
      </TabsList>
      <TabsContent value='office' className='flex-1 mt-4'>
        <iframe
          width='100%'
          height='100%'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%E0%A6%AB%E0%A6%B0%E0%A6%9A%E0%A7%81%E0%A6%A8%20%E0%A6%9C%E0%A6%BF%E0%A6%AA%E0%A6%BE%E0%A6%B0%20%E0%A6%B2%E0%A6%BF%E0%A6%AE%E0%A6%BF%E0%A6%9F%E0%A7%87%E0%A6%A1+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        >
          <a href='https://www.gps.ie/'>gps trackers</a>
        </iframe>
      </TabsContent>
      <TabsContent value='factory' className='flex-1 mt-4'>
        <iframe
          width='100%'
          height='100%'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Forune%20Zipper%20Factory+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        >
          <a href='https://www.gps.ie/'>gps systems</a>
        </iframe>
      </TabsContent>
    </Tabs>
  );
};

export default Map;
