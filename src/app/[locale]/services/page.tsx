import HeroHeadersec1 from '@/components/services/HeroHeadersec1';

import ServisesListS2 from '@/components/services/ServisesListS2';
import Link from 'next/link';

import React from 'react';

function page() {
  return (
    <div className='relative  w-full  bg-[#f7f5ed]     pb-[50px]'>
      <div className='w-full ' id='top'></div>
      <Link
        href='#top'
        className='right-15 bottom-20 fixed w-[40px] h-10 rounded-full bg-red-400 z-60'
      >
        Top
      </Link>
      <HeroHeadersec1 />
      <ServisesListS2 />
    </div>
  );
}

export default page;
