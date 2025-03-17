'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Framer from '../magniteButtonsNav/framer';
import { animationDiv } from '@/framer';

export function HeroSec1() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  // Function to generate random positions
  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 1500) - 250, // Random x between -250 to 250
    y: Math.floor(Math.random() * 400) - 200, // Random y between -200 to 200
  });

  useEffect(() => {
    const moveRandomly = async (controls: any) => {
      while (true) {
        await controls.start(getRandomPosition());
        await new Promise((res) => setTimeout(res, 2000)); // Change position every 2 sec
      }
    };

    moveRandomly(controls1);
    moveRandomly(controls2);
  }, []);

  return (
    <div className='w-full relative h-screen flex justify-center items-center  overflow-hidden'>
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
        className='z-20 mt-[100px] max-w-[1440px] mx-auto w-full  px-[30px] flex flex-col items-start justify-end gap-10'
      >
        <p className='text-4xl  font-normal text-neutral-300 dark:text-neutral-400'>
          Innovative Engineering Solutions for a Sustainable Future
        </p>
        <div className={`w-[240px] h-[50px] `}>
          <Framer>
            <div className='text-base rounded-[38px] font-normal px-[10px] py-[16px] cursor-pointer bg-[#e43071] hover:bg-[#be285e] text-[#ffffff] text-center flex items-center justify-center gap-[10px]'>
              <p>Explore Our Services</p>
            </div>
          </Framer>
        </div>
      </motion.div>
    </div>
  );
}
