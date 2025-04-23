import CompanyName from '@/components/LandingPage/companyName';

import ServisesListS2 from '@/components/services/ServisesListS2';

import React from 'react';

function page() {
  return (
    <div className='relative flex-1   w-full  items-center justify-center flex flex-col pt-30    pb-[50px]'>
      <div className='w-full ' id='top'></div>

      <CompanyName />
      <div className='my-20'>
        <ServisesListS2 />
      </div>
    </div>
  );
}

export default page;
