import CompanyName from '@/components/LandingPage/companyName';

import ServisesListS2 from '@/components/services/ServisesListS2';

import React from 'react';

function page() {
  return (
    <main className='relative flex-1   w-full  items-center justify-center flex flex-col md:pt-30 -pt-30    pb-[50px]'>
      <div className='w-full ' id='top'></div>
      <div className='w-full  '>
        <CompanyName />
      </div>
      <div className='my-20 w-full'>
        <ServisesListS2 />
      </div>
    </main>
  );
}

export default page;
