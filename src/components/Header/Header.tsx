import React from 'react';
import ButtonNav from '../magniteButtonsNav/ButtonsNav';
import LanguageDropdown from '../ui/LanguageDropdown';
import Image from 'next/image';
import { Logo } from '../../../public';

function Header() {
  return (
    <header className='fixed  z-50  top-10 w-full flex items-center justify-center '>
      <div className='relative hidden sm:inline-block xl:max-w-[1280px]  w-full  mx-2 rounded-[250px] 2xl:mx-auto   text-white border border-neutral-500'>
        <div className='absolute w-full h-full opacity-90  bg-[#0D1113]  rounded-[250px]'></div>
        <div className='flex items-center  justify-between  py-3 px-5 '>
          <div className='bg-white z-10 flex items-center justify-center'>
            <Image
              src={Logo}
              alt=' WAVE Logo'
              width={100}
              height={30}
              style={{ fill: '#ff0000' }}
            />
          </div>
          <div className='flex justify-center items-center gap-2'>
            <ButtonNav />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
