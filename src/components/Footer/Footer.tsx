'use client';

import Link from 'next/link';
import React from 'react';

import Button from '../Button/Button';

function Footer() {
  return (
    <div className='relative h-[400px]'>
      <div className='h-full w-full bg-[#45444f] text-white'>
        <div className='max-w-[1280px] w-full mx-auto flex flex-col pt-[50px] justify-between px-6 h-full'>
          <div className='flex flex-wrap justify-between mb-[60px]'>
            <div className='flex flex-col gap-3 justify-between '>
              <h2 className='text-xl font-semibold'>[Company Logo]</h2>
              <div className='mt-4'>
                <ul className='mt-2 space-y-1 flex gap-4'>
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
            </div>
            <div className='max-w-[400px] flex flex-col items-center justify-center'>
              <h4 className='text-lg font-light tracking-wide text-white mb-3 self-start'>
                About
              </h4>
              <p className='text-sm font-light leading-relaxed text-gray-400 mt-2 '>
                Our highly experienced teams within the office, manufacturing
                department & site are able to fully procure any project from
                concept to completion.
              </p>
            </div>

            <Button>
              <p className='z-20 '>Get In Touch</p>
            </Button>
          </div>

          <div className='flex justify-between items-end mb-10 h-full border-t border-gray-600 pt-4 text-sm'>
            <p>
              © {new Date().getFullYear()} [Your Company Name]. All rights
              reserved.
            </p>
            <div className='flex space-x-2'>
              <Link href='/privacy-policy' className='hover:underline'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='hover:underline'>
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
