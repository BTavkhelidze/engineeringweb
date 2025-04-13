import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';
import LanguageDropdown from '../ui/LanguageDropdown';

function Header() {
  return (
    <header className='fixed  z-50  top-10 w-full flex items-center justify-center '>
      <div className='relative  max-w-[1000px] w-full   rounded-[250px] mx-auto   text-white border border-neutral-500'>
        <div className='absolute w-full h-full opacity-90  bg-[#0D1113]  rounded-[250px]'></div>
        <div className='flex items-center  justify-between  py-3 px-5'>
          <div className=''>
            <ButtonNav />
          </div>
          <div className=''>
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
