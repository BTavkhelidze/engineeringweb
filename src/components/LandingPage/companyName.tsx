'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { animationDiv } from '@/framer';

function CompanyName() {
  return (
    <section className='w-full h-[600px] mb-10  '>
      <div className='max-w-[1440px] mx-auto gap-20 flex flex-col justify-center h-full '>
        <div></div>
        <motion.h1
          initial='initial'
          variants={animationDiv}
          animate='animate'
          className='text-9xl font-bold'
        >
          WAVE
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          className='justify-self-start font-light  text-2xl'
        >
          {' '}
          სამშენებლო სამეურნეო კომპანია
        </motion.p>
      </div>
    </section>
  );
}

export default CompanyName;
