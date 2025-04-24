'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { animationDiv } from '@/framer';
import { useTranslations } from 'next-intl';

import Button from '../Button/Button';

export function HeroSec1() {
  const t = useTranslations('LandingPage');
  return (
    <div className='w-full relative h-full xl:min-h-[100dvh] flex justify-center items-center  overflow-hidden '>
      <div className='w-full h-full absolute top-0 left-0 overflow-hidden z-10 '>
        <video
          className='w-full object-cover h-full'
          src='/heroVideo.mp4'
          autoPlay
          muted
          loop
        />
      </div>
      <div className='absolute w-full h-screen bg-black opacity-50 z-20'></div>
      <motion.div
        variants={animationDiv}
        initial='initial'
        animate='animate'
        className='z-20 mt-[100px] max-w-[1280px] mx-auto w-full  px-[30px] flex flex-col items-start justify-end gap-10'
      >
        <h3 className='text-2xl  font-medium text-white '>{t('Title')}</h3>
        <div className={` text-white bg-black rounded-4xl   flex items-center`}>
          <Button>
            <p className='z-20 text-sm font-normal'> {t('BtnTitle')}</p>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
