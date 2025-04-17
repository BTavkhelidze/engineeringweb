'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFireAlt, FaSnowflake, FaFan, FaBolt, FaTools } from 'react-icons/fa';
import { ChevronRight } from 'lucide-react';

function SingleService() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const services = [
    { title: 'Heating', icon: <FaFireAlt className='text-red-500 text-2xl' /> },
    {
      title: 'Cooling',
      icon: <FaSnowflake className='text-blue-400 text-2xl' />,
    },
    {
      title: 'Ventilation',
      icon: <FaFan className='text-gray-300 text-2xl' />,
    },
    {
      title: 'Electrical',
      icon: <FaBolt className='text-yellow-400 text-2xl' />,
    },
    {
      title: 'Plumbing',
      icon: <FaTools className='text-green-500 text-2xl' />,
    },
  ];
  return (
    <div
      className='w-full  max-w-[1280px] mx-auto my-6 px-6 lg:mx-6
xl:mx-10 
2xl:mx-auto '
    >
      <h2 className='text-white text-center sm:text-start'>Services</h2>
      <div className='flex  gap-4 mt-4 xl:flex-nowrap flex-wrap justify-center sm:justify-start'>
        {services.map((ser, i) => {
          return (
            <div key={i} className='flex items-center justify-center'>
              <motion.div
                className='relative w-[240px] h-[180px] cursor-pointer border border-[#18181B] bg-[#0C1013] rounded-[8px] overflow-hidden flex items-center justify-center '
                whileHover={{
                  scale: [null, 1.04],
                  transition: {
                    duration: 0.5,
                    times: [0, 0.6],
                    ease: ['easeInOut', 'easeOut'],
                  },
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
              >
                {ser.icon}
                <div className='absolute w-full h-[35px] flex items-center bg-[#18181B] text-white bottom-0 text-start px-2'>
                  {ser.title}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
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
  );
}

export default SingleService;
