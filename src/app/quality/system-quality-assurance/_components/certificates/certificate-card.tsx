import React from 'react';

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { ICertificate } from '@/types';

const CertificateCard: React.FC<{ data: ICertificate }> = ({ data }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='text-center space-y-2'>
          <Image width={400} height={400} src={data.image} alt='Certificate' />
          <DialogTitle>{data.title}</DialogTitle>
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px]'>
        <Image
          width={500}
          height={500}
          src={'/placeholder.svg'}
          alt='Certificate'
        />
      </DialogContent>
    </Dialog>
  );
};

export default CertificateCard;
