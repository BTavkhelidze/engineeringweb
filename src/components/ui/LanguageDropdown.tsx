'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

const langMap: Record<string, 'GEO' | 'EN'> = { ka: 'GEO', en: 'EN' };

const LanguageSwitcher: React.FC = () => {
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const currentLanguage = langMap[params?.locale || 'en'] || 'EN';
  const newLocale = currentLanguage === 'EN' ? 'ka' : 'en';
  const [isOpen, setIsOpen] = useState(false);

  const getPathWithLocale = (locale: string): string => {
    if (!pathname || !params?.locale) return '/';
    return `/${locale}${pathname.slice(3)}`;
  };

  return (
    <div className='relative z-50'>
      <div
        className='relative'
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          className={`px-3 py-1.5 w-[48px] text-center rounded-md text-sm font-light transition-colors duration-200 ${
            isOpen
              ? 'bg-gray-100 dark:bg-gray-700'
              : 'bg-transparent dark:bg-transparent'
          } text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700`}
        >
          {currentLanguage}
        </button>
        <div
          className={`absolute left-0 top-full w-full rounded-md overflow-hidden transition-all duration-200 transform ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-1 pointer-events-none'
          } bg-white dark:bg-gray-800 z-50 border border-gray-200 dark:border-gray-700`}
        >
          <Link href={getPathWithLocale(newLocale)}>
            <p
              className={`px-3 py-1.5 text-sm font-light text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200`}
            >
              {newLocale === 'en' ? 'EN' : 'GEO'}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
