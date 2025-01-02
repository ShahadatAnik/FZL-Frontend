import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { useSwiper } from 'swiper/react';

const HeroNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex gap-4 '>
      <Button
        onClick={() => swiper.slidePrev()}
        variant={'outline'}
        size={'icon'}
        // disabled={swiper.isBeginning}
      >
        <ArrowLeft />
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        variant={'default'}
        size={'icon'}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default HeroNavigation;
