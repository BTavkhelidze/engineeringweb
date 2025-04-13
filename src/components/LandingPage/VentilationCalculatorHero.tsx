'use client';

import React, { useState } from 'react';
// import Calculator from '../Calculator/Calculator';
import { Calculator } from '../../../public';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

function VentilationCalculatorHero() {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <section className='bg-[#0C1013] text-white py-6 px-6 rounded-xl mt-20 mb-20'>
      <div className='max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-8  px-6'>
        <div className='flex-1'>
          <h2 className='text-3xl font-bold mb-4'>Ventilation Calculator</h2>
          <p className='text-gray-300 mb-6'>
            Calculate the required airflow for your space quickly and easily.
            Enter your room dimensions and air change rate to get accurate
            ventilation estimates.
          </p>
          <p
            className='text-white mt-6 text-sm flex gap-2 cursor-pointer items-center '
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            See all Services{' '}
            <motion.span
              className=''
              initial={{ x: 0 }}
              animate={isHover ? { x: 10 } : { x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ChevronRight />
            </motion.span>
          </p>
        </div>

        <div className='flex-1 flex justify-end '>
          <Image src={Calculator} alt='calculator' width={200} className='' />
          {/* <Image src={Calculator}/> */}
        </div>
      </div>
    </section>
  );
}

export default VentilationCalculatorHero;
