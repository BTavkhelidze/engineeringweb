import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';
import LanguageDropdown from '../ui/LanguageDropdown';

function Header() {
  return (
    <header className='fixed  z-50  top-10 w-full flex items-center justify-center '>
      <div className='relative flex items-center  justify-between max-w-[800px] w-full  py-3 px-5 rounded-[250px] mx-auto   text-white '>
        <div className='absolute w-full h-full opacity-90  bg-[#0D1113]  backdrop-blur-sm rounded-[250px]'></div>
        <div className='ml-10'>
          <ButtonNav />
        </div>
        <div className=''>
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
