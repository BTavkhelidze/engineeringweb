import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';
import LanguageDropdown from '../ui/LanguageDropdown';

function Header() {
  return (
    <header className='fixed  z-50  bottom-10 w-full flex items-center justify-center '>
      {/* <div className='max-w-[1440px] mx-auto w-full flex items-center justify-between px-6 py-4'>
        <h1 className='text-xl font-light text-gray-800 tracking-wide cursor-default'>
          Company Name
        </h1>
        <div className='flex items-center justify-center gap-20'>
        </div>
      </div> */}
      <div className='flex items-center  justify-between max-w-[500px] w-full  py-3 px-5 rounded-[50px] mx-auto border-[2px] border-black bg-white text-white'>
        <div className='ml-20'>
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
