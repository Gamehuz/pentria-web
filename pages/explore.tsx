import Card from '@/components/Card';
import FrontLayout from '@/layout/FrontLayout';
import React from 'react';

const explore = () => {
  return (
    <div>
      <FrontLayout>
        <main className='lg:px-20 p-4'>
          <input type="text" className='p-3 border rounded-full w-80 float-right' placeholder='Search' />
          <div className='flex flex-wrap justify-between'>
            <Card />

          </div>
        </main>
      </FrontLayout>
    </div>
  );
};

export default explore;