'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { house2, poster, Dinning } from '../../../public';

export const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isActive, setIsActive] = useState(false);

  const images = [
    { image: house2, alt: 'image' },
    { image: poster, alt: 'image' },
    { image: Dinning, alt: 'image' },
  ];
  const variants = {
    active: { opacity: 1, bottom: 0 },
    inActive: { opacity: 0, bottom: '-48px' },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleChangeCurrentSlide = () => {
    setCurrentSlide((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className='py-[50px] flex gap-4 w-full'>
      <div className='max-w-[400px] w-full h-full relative  '>
        {images.map((image, i) => {
          return (
            <>
              {currentSlide === i && (
                <div key={i} className='relative  w-full h-full  '>
                  <Image
                    src={image.image}
                    alt={image.alt}
                    className={
                      currentSlide === i
                        ? ' object-cover h-full w-full '
                        : 'hidden'
                    }
                  />
                  <div className='absolute top-0 w-full h-full z-10 bg-black opacity-10 flex itmes-end '></div>
                  <div className='absolute bottom-0 px-6 py-6 z-20 '>
                    <div className='flex  items-end'>
                      <div className='bg-white   p-8 backdrop-opacity-75'>
                        <div className='flex items-center gap-2 '>
                          <span className='font-medium text-base text-[#616161]'>
                            {i < 10 ? `0${i + 1}` : i + 1}
                          </span>
                          <span className='w-[27px] h-[1px] bg-[#616161]'></span>
                          <span className='font-medium text-base text-[#616161]'>
                            {image.alt}
                          </span>
                        </div>
                        <p className='font-semibold text-2xl text-[#3a3a3a] mt-2'>
                          Inner Peace
                        </p>
                      </div>
                      <div className='bg-[#b88e2f]  w-[48px] h-[48px] flex items-center justify-center cursor-pointer'>
                        {/* <Image src={arrowRight} alt='go to category' /> */}
                        arrows
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
      <div className='relative  w-full flex flex-col '>
        <div className='max-w-[400px] w-full h-[480px]  flex gap-3  '>
          {images.map((image, i) => (
            <Image
              src={image.image}
              key={i}
              alt={image.alt}
              className={
                currentSlide !== i ? ' object-cover h-full w-full ' : 'hidden'
              }
            />
          ))}
        </div>

        <div className='flex-1 items-center flex  '>
          <div className='flex gap-4 items-center ml-10'>
            {images.map((_, i) => (
              <>
                {currentSlide === i ? (
                  <div className='w-[27px] h-[27px] border rounded-full border-[#b88e2f]  flex items-center justify-center'>
                    <div className='bg-[#b88e2f] w-[11px] h-[11px] rounded-full'></div>
                  </div>
                ) : (
                  <div className='bg-[#d8d8d8] w-[11px] h-[11px] rounded-full'></div>
                )}
              </>
            ))}
          </div>
        </div>
        <div
          onClick={() => handleChangeCurrentSlide()}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className='absolute right-1/4 cursor-pointer w-[48px] flex items-center justify-center   h-[48px] rounded-full shadow-xl  bg-white top-2/4'
        >
          <Image src={'/arrow.svg'} alt='next image' width={13} height={13} />
          <AnimatePresence>
            {isActive ? (
              <motion.div
                className='absolute  bg-black w-[48px]  h-[48px]   rounded-full  overflow-hidden'
                variants={variants}
                key={'inActive'}
                initial={'inActive'}
                animate={'active'}
                exit={{ opacity: 0, top: '-48px' }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
