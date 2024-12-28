import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const specs = [
  {
    model_no: '#1',
    close_end: '✅',
    open_end: '✅',
    two_way_close_end: '✅',
    two_way_open_end: '✅',
    chain: '✅',
  },
  {
    model_no: '#2',
    close_end: '✅',
    open_end: '✅',
    two_way_close_end: '❌',
    two_way_open_end: '❌',
    chain: '✅',
  },
];

const Specifications = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Close End</TableHead>
            <TableHead>Open End</TableHead>
            <TableHead>2 Way Close End</TableHead>
            <TableHead>2 Way Open End</TableHead>
            <TableHead>Chain</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {specs.map((spec, index) => (
            <TableRow key={index}>
              <TableCell className='font-medium'>{spec.model_no}</TableCell>
              <TableCell>{spec.close_end}</TableCell>
              <TableCell>{spec.open_end}</TableCell>
              <TableCell>{spec.two_way_close_end}</TableCell>
              <TableCell>{spec.two_way_open_end}</TableCell>
              <TableCell>{spec.chain}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Specifications;
