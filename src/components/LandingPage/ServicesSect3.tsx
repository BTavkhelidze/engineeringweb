'use client';
import React from 'react';
import { SlideShow } from './SwiperForServices';
import Framer from '../magniteButtonsNav/framer';

function ServicesSect3() {
  return (
    <section className='mt-[62px] w-full bg-[#fcf8f3] pl-[100px] flex lg:min-h-[660px] '>
      <div className=' flex-[33%]  '>
        <div className='flex   flex-col  justify-center items-start max-w-[420px] w-full h-full'>
          <p className='font-bold text-4xl text-[#3a3a3a]'>
            Engineering Solutions Tailored for Every Challenge
          </p>

          <div className={`w-[240px] h-[50px] `}>
            <Framer>
              <button className='cursor-pointerq px-[36px] py-3 mt-[25px] bg-[#b88e2f] text-white font-semibold text-base'>
                Explore Our Services
              </button>
            </Framer>
          </div>
        </div>
      </div>
      <div className='flex flex-[77%]  overflow-x-hidden w-full '>
        <SlideShow />
      </div>
    </section>
  );
}

export default ServicesSect3;
