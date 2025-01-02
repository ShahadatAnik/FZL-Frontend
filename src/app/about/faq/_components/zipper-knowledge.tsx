import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { zipper_knowledge_faq } from '../_config/faq-data';

const ZipperKnowledge = () => {
  return (
    <div>
      <h3
        className='text-2xl font-medium font-poppins  bg-secondary py-3 px-6 border-l-4 border-accent
      '
      >
        Zipper Knowledge
      </h3>
      <Accordion type='single' collapsible className='w-full'>
        {zipper_knowledge_faq.map((item, index) => (
          <AccordionItem key={index} value={item.question}>
            <AccordionTrigger className='text-lg text-left'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='text-base text-muted-foreground leading-relaxed'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ZipperKnowledge;
