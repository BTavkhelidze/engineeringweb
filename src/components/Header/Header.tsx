import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';

function Header() {
  return (
    <header className='fixed top-0 z-100 bg-[#fcf8f3]   w-full'>
      <div className='max-w-[1440px] w-full mx-auto flex justify-between  py-[30px] px-[30px]'>
        <h1 className='cursor-default'>Company Name</h1>
        <ButtonNav />
      </div>
    </header>
  );
}

export default Header;
