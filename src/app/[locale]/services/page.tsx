import CompanyName from '@/components/LandingPage/companyName';

import ServisesListS2 from '@/components/services/ServisesListS2';

import React from 'react';

function page() {
  return (
    <div className='relative flex-1   w-full  items-center justify-center flex flex-col pt-30    pb-[50px]'>
      <div className='w-full ' id='top'></div>
      {/* <Link
        href='#top'
        className='right-15 bottom-20 fixed w-[40px] h-10 rounded-full bg-red-400 z-60'
      >
        Top
      </Link> */}
      {/* <HeroHeadersec1 /> */}
      <CompanyName />
      <div className='my-20'>
        <ServisesListS2 />
      </div>
    </div>
  );
}

export default page;
