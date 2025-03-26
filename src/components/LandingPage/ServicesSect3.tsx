'use client';
import React from 'react';
import { SlideShow } from './SwiperForServices';
import Framer from '../magniteButtonsNav/framer';
import Button from '../Button/Button';

function ServicesSect3() {
  return (
    <section className='mt-[62px] w-full bg-[#f7f5ed] pl-[100px] flex lg:min-h-[660px] '>
      <div className=' flex-[33%]  '>
        <div className='flex   flex-col  justify-center items-start max-w-[420px] w-full h-full'>
          <p className='font-bold text-4xl text-[#3a3a3a]'>
            Engineering Solutions Tailored for Every Challenge
          </p>

          <div className='self-start mt-10 '>
            <Framer>
              <Button mainBackgroundColor='black'>
                <p className='w-full h-full z-10  text-white font-semibold text-base'>
                  Explore Our Services
                </p>
              </Button>
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
