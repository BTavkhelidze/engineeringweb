'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Framer from './framer';

export default function ButtonNav() {
  const [active, setActive] = useState('');
  const t = useTranslations('HeaderNav');

  return (
    <nav className='flex gap-6'>
      <Link
        href={'/'}
        className={`text-sm font-light tracking-wide relative transition-colors duration-200 ${
          active.includes('home')
            ? 'text-black dark:text-white'
            : 'text-gray-600 dark:text-gray-400'
        } hover:text-gray-900 dark:hover:text-white`}
        onMouseEnter={() => setActive('home')}
        onMouseLeave={() => setActive('')}
      >
        {t('Home')}
        {active === 'home' && (
          <span
            className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
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
            ? 'text-black dark:text-white'
            : 'text-gray-600 dark:text-gray-400'
        } hover:text-gray-900 dark:hover:text-white`}
        onMouseEnter={() => setActive('calculator')}
        onMouseLeave={() => setActive('')}
      >
        {t('About')}
        {active === 'calculator' && (
          <span
            className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
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
          active === 'services'
            ? 'text-gray-100 dark:text-white'
            : 'text-black dark:text-gray-400 '
        } hover:text-gray-900 dark:hover:text-white`}
        onMouseEnter={() => setActive('services')}
        onMouseLeave={() => setActive('')}
      >
        {t('Services')}
        {active === 'services' && (
          <span
            className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
              active === 'services'
                ? 'bg-gray-900 dark:bg-white'
                : 'bg-gray-600 dark:bg-gray-400 '
            }`}
          />
        )}
      </Link>
    </nav>
  );
}
