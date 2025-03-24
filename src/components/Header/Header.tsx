import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';

function Header() {
  return (
    <header className=' top-0 left-0 w-full z-50 bg-gray-50/95 backdrop-blur-sm'>
      <div className='max-w-[1440px] mx-auto w-full flex items-center justify-between px-6 py-4'>
        <h1 className='text-xl font-light text-gray-800 tracking-wide cursor-default'>
          Company Name
        </h1>
        <ButtonNav />
      </div>
    </header>
  );
}

export default Header;
