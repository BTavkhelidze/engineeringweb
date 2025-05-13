'use client';

import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';

function Footer() {
  return (
    <footer className='relative z-50  text-white'>
      <div className='max-w-[1280px] w-full mx-auto px-6 py-12 flex flex-col relative'>
        <div className='flex flex-col items-center md:items-start md:flex-row flex-wrap justify-between  md:gap-4 gap-8 lg:gap-8 mb-12'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl font-semibold text-center md:text-start '>
              WAVE
            </h2>
            <ul className='flex flex-wrap gap-4 text-sm'>
              <li>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:underline'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:underline'>
                  Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div className='max-w-[400px]  flex-col hidden sm:flex text-center md:text-start'>
            <h4 className='text-lg font-light tracking-wide mb-2'>About</h4>
            <p className='text-sm font-light leading-relaxed text-[#898D8E]'>
              Our highly experienced teams within the office, manufacturing
              department & site are able to fully procure any project from
              concept to completion.
            </p>
          </div>

          <div className='flex items-center justify-center lg:justify-center'>
            <Button>
              <p className='z-20'>Get In Touch</p>
            </Button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-between items-center border-t border-dotted border-gray-600 pt-6 text-sm gap-4'>
          <p className='text-center sm:text-start'>
            ©2025 WAVE. All rights reserved.
          </p>
          <div className='flex flex-wrap justify-center sm:justify-end gap-4'>
            <Link href='/privacy-policy' className='hover:underline'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='hover:underline'>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
