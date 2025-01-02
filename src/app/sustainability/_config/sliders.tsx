import { ISlide } from '@/types';

const sliders: ISlide[] = [
  {
    image: '/images/sliders/slide-2.jpg',
    content: (
      <div className='size-full flex justify-end items-center p-32'>
        <h2 className='text-3xl max-w-[400px] text-white font-thin'>
          How we play sustainability
        </h2>
      </div>
    ),
  },
  {
    image: '/images/sliders/slide-3.jpg',
    content: (
      <div className='size-full max-w-[1200px] mx-auto flex items-center'>
        <div>
          <h1 className='text-4xl text-white'>
            <span className='font-bold'>The challenge of climate change</span>
            <br />
            <span className='font-thin uppercase'>
              Sustainability is Survivability
            </span>
          </h1>
          <p className='mt-8 max-w-[800px] text-muted-foreground'>
            FZL is leveraging the Climate Change Initiatives of Bangladesh to
            craft a reduction trajectory that aligns its activities with
            planetary boundaries. Key initiatives include water treatment and
            reuse, resource reusability and paperless operations. Through these
            efforts, FZL also aims to establish an international standard,
            incorporating climate change objectives into a legal framework for
            the entire industry.
            <br />
            <br />
            <span className='font-bold'>
              FZL dreams to one day lead the way in sustainable zipper
              manufacturing by reducing impact and setting standards.
            </span>
          </p>
        </div>
      </div>
    ),
  },
];

export default sliders;
