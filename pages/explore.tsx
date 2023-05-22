import Card from '@/components/Card';
import FrontLayout from '@/layout/FrontLayout';
import React from 'react';

const explore = () => {
  return (
    <FrontLayout>
      <main className='lg:px-20 p-4'>
        <input type="text" className='p-3 border rounded-full w-80 float-right' placeholder='Search' />
        <div className='flex flex-wrap mt-20 justify-between'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </FrontLayout>
  );
};

export default explore;