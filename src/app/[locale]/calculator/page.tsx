import Calculator from '@/components/Calculator/Calculator';
import UnderConstruction from '@/components/PageUnderConstruction/UnderConstruction';
import React from 'react';

function page() {
  return (
    <main className='max-w-[1440px] w-full h-[300vh] mx-auto pt-20'>
      <UnderConstruction />
      {/* <h2 className='mb-10'>Calculate</h2>

      <Calculator /> */}
    </main>
  );
}

export default page;
