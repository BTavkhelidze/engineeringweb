'use client';
import React from 'react';

export function WellcomeScrollSect2() {
  return (
    <div className='max-w-[1440px] mx-auto flex overflow-hidden px-[30px] pt-[80px]  gap-[30px]'>
      <div className='flex-1'>
        <p className='text-2xl  mb-20 font-med2ium text-black'>
          From structural engineering to project management, we ensure
          precision, sustainability, and efficiency in every project we
          undertake. Whether it’s designing resilient buildings, optimizing
          infrastructure, or driving technological advancements, we’re here to
          engineer a better tomorrow.
        </p>
      </div>

      <div className='flex-1 flex items-center  flex-col gap-6'>
        <p className=' self-start text-base font-semibold'>
          Building the Future with Engineering Excellence
        </p>
        <div className='w-[100px] mr-16 h-[100px] rounded-full bg-amber-400 flex items-center justify-center text-sm '>
          About Us
        </div>
      </div>
    </div>
  );
}
