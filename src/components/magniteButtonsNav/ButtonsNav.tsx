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
      <Framer>
        <Link
          href={'/'}
          className={`text-sm font-light tracking-wide relative transition-colors duration-200 ${
            active === 'home'
              ? 'text-gray-900 dark:text-white'
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
      </Framer>
      <Framer>
        <Link
          href='/about'
          className={`text-sm font-light tracking-wide relative transition-colors duration-200 ${
            active === 'about'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400'
          } hover:text-gray-900 dark:hover:text-white`}
          onMouseEnter={() => setActive('about')}
          onMouseLeave={() => setActive('')}
        >
          {t('About')}
          {active === 'about' && (
            <span
              className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                active === 'about'
                  ? 'bg-gray-900 dark:bg-white'
                  : 'bg-gray-600 dark:bg-gray-400'
              }`}
            />
          )}
        </Link>
      </Framer>
      <Framer>
        <Link
          href='/services'
          className={`text-sm font-light tracking-wide relative transition-colors duration-200 ${
            active === 'services'
              ? 'text-gray-900 dark:text-white'
              : 'text-gray-600 dark:text-gray-400'
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
                  : 'bg-gray-600 dark:bg-gray-400'
              }`}
            />
          )}
        </Link>
      </Framer>
    </nav>
  );
}
