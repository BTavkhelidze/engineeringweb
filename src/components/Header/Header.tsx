import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';
import LanguageDropdown from '../ui/LanguageDropdown';

function Header() {
  return (
    <header className='fixed  z-50   w-full flex items-center justify-center bg-[#45444F]'>
      <div className='relative  max-w-[1000px] w-full   rounded-[250px] mx-auto      text-white '>
        <div className='flex items-center  justify-between  py-3 px-5'>
          <div className=''>
            <p>Logo</p>
          </div>
          <div className='flex gap-10 items-center'>
            <ButtonNav />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
