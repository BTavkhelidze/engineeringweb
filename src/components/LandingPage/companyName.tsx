'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { animationDiv } from '@/framer';
import { Spotlight } from '../ui/spotlight';

import '@/app/globals.css';

function CompanyName() {
  return (
    <section className='w-full h-[550px] mb-10  '>
      <div className='relative max-w-[1280px] mx-auto gap-6 flex flex-col items-center justify-center h-full '>
        <div className=' w-full  z-10 h-full absolute'>
          <Spotlight
            className='-top-40 left-0 md:-top-20 md:left-60'
            fill='white'
          />
        </div>
        <motion.h1
          initial='initial'
          variants={animationDiv}
          animate='animate'
          className='text-9xl font-bold text-[#3B82F6]'
        >
          WAVE
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          className='justify-self-start font-light  text-2xl text-[#898D8E]'
        >
          {' '}
          Water Air Voltage Engeenering Design
        </motion.p>
      </div>
    </section>
  );
}

export default CompanyName;
