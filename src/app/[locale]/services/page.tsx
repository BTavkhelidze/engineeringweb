import Framer from '@/components/magniteButtonsNav/framer';
import Descriptions from '@/components/services/Descriptions';
import HeroHeadersec1 from '@/components/services/HeroHeadersec1';
import ServisesList from '@/components/services/ServisesList';
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
      {/* <Descriptions />
      <ServisesList /> */}
      {/* <div className='max-w-[1440px] mx-auto pt-[30px] mb-[40px] w-full flex justify-center'>
        <div className={`w-[240px] h-[50px] `}>
          <div className='text-base rounded-[38px] font-normal px-[10px] py-[16px] cursor-pointer bg-[#e43071] hover:bg-[#be285e] text-[#ffffff] text-center flex items-center justify-center gap-[10px]'>
            <p>Contact Us for a Consultation</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default page;
