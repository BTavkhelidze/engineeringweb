'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function ButtonNav() {
  const [active, setActive] = useState('');

  const t = useTranslations('HeaderNav');

  return (
    <>
      {/* <div onClick={() => setOpen((prev) => !prev)}> ===</div> */}

      <nav className='flex gap-6'>
        <Link
          href={'/'}
          className={`text-sm font-light tracking-wide relative transition-colors duration-200 ${
            active.includes('home') ? 'text-[#FFFFFF] ' : 'text-[#F9F9F9] '
          } hover:text-gray-900 dark:hover:text-white`}
          onMouseEnter={() => setActive('home')}
          onMouseLeave={() => setActive('')}
        >
          {t('Home')}
          {active === 'home' && (
            <span
              className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full mt-2 ${
                active === 'home'
                  ? 'bg-gray-900 dark:bg-white'
                  : 'bg-gray-600 dark:bg-gray-400'
              }`}
            />
          )}
        </Link>

        <Link
          href='/calculator'
          className={`text-sm font-light tracking-wide relative transition-colors duration-200 ${
            active.includes('calculator')
              ? 'text-[#FFFFFF] '
              : 'text-[#F9F9F9] '
          } hover:text-gray-900 dark:hover:text-white`}
          onMouseEnter={() => setActive('calculator')}
          onMouseLeave={() => setActive('')}
        >
          {t('About')}
          {active === 'calculator' && (
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full mt-2 ${
                active === 'calculator'
                  ? 'bg-gray-900 dark:bg-white'
                  : 'bg-gray-600 dark:bg-gray-400'
              }`}
            />
          )}
        </Link>

        <Link
          href='/services'
          className={`text-sm font-light tracking-wide relative transition-colors duration-200 ${
            active === 'services' ? 'text-[#FFFFFF] ' : 'text-[#F9F9F9] '
          } hover:text-gray-900 dark:hover:text-white`}
          onMouseEnter={() => setActive('services')}
          onMouseLeave={() => setActive('')}
        >
          {t('Services')}
          {active === 'services' && (
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full mt-2 ${
                active === 'services'
                  ? 'bg-gray-900 dark:bg-white'
                  : 'bg-gray-600 dark:bg-gray-400 '
              }`}
            />
          )}
        </Link>
      </nav>
    </>
  );
}
