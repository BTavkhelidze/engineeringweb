import CompanyName from '@/components/LandingPage/companyName';
import { HeroSec1 } from '@/components/LandingPage/HeroSect1';

import SingleService from '@/components/LandingPage/HeroSwiper/SingleService';
import VentilationCalculatorHero from '@/components/LandingPage/VentilationCalculatorHero';
import { WellcomeScrollSect2 } from '@/components/LandingPage/WellcomeScrollSect2';

export default function Home() {
  return (
    <div className=' '>
      <CompanyName />
      <div className='mb-10'>
        <WellcomeScrollSect2 />
      </div>
      <HeroSec1 />
      <SingleService />
      <VentilationCalculatorHero />
      {/* <HeroSwiper /> */}
      {/* <ServicesSect3 /> */}
    </div>
  );
}
