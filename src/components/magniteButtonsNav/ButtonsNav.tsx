'use client';
import Link from 'next/link';
import Framer from './framer';
import { useState } from 'react';

export default function ButtonNav() {
  const [active, setActive] = useState('');

  return (
    <nav className='flex gap-8'>
      <Framer>
        <Link
          href={'/'}
          className='text-gray-800 text-base font-light tracking-wide 
            relative hover:text-gray-600 transition-colors duration-300'
          onMouseEnter={() => setActive('home')}
          onMouseLeave={() => setActive('')}
        >
          Home
          {active === 'home' && (
            <span
              className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 
              w-1.5 h-1.5 rounded-full bg-gray-600'
            />
          )}
        </Link>
      </Framer>
      <Framer>
        <Link
          href='/about'
          className='text-gray-800 text-base font-light tracking-wide 
            relative hover:text-gray-600 transition-colors duration-300'
          onMouseEnter={() => setActive('about')}
          onMouseLeave={() => setActive('')}
        >
          About
          {active === 'about' && (
            <span
              className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 
              w-1.5 h-1.5 rounded-full bg-gray-600'
            />
          )}
        </Link>
      </Framer>
      <Framer>
        <Link
          href='/services'
          className='text-gray-800 text-base font-light tracking-wide 
            relative hover:text-gray-600 transition-colors duration-300'
          onMouseEnter={() => setActive('services')}
          onMouseLeave={() => setActive('')}
        >
          Services
          {active === 'services' && (
            <span
              className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 
              w-1.5 h-1.5 rounded-full bg-gray-600'
            />
          )}
        </Link>
      </Framer>
    </nav>
  );
}
