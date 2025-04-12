'use client';
import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

function HeroSwiper() {
  return (
    <section className='max-w-[1280px] mx-auto w-full mt-20 flex flex-col gap-4 bg-red-200'>
      <h2 className='text-white '>Services</h2>
      <div className='w-full h-[300px]'>
        {' '}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide className='w-[280px]! h-[220px]! flex!'>
            <motion.div
              className='w-[240px] h-[180px] bg-red-100 cursor-pointer'
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
              ss
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSwiper;
