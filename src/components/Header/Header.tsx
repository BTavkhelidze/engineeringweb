import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';
import LanguageDropdown from '../ui/LanguageDropdown';

function Header() {
  return (
    <header className=' w-full z-50 bg-gray-50/95 '>
      <div className='max-w-[1440px] mx-auto w-full flex items-center justify-between px-6 py-4'>
        <h1 className='text-xl font-light text-gray-800 tracking-wide cursor-default'>
          Company Name
        </h1>
        <div className='flex items-center justify-center gap-20'>
          <ButtonNav />
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
