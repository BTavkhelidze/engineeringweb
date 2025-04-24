import CompanyName from '@/components/LandingPage/companyName';
// import { HeroSec1 } from '@/components/LandingPage/HeroSect1';

import SingleService from '@/components/LandingPage/HeroSwiper/SingleService';
import VentilationCalculatorHero from '@/components/LandingPage/VentilationCalculatorHero';
import { WellcomeScrollSect2 } from '@/components/LandingPage/WellcomeScrollSect2';
import WhyChooseUs from '@/components/LandingPage/WyhChooseUs';

export default function Home() {
  return (
    <main>
      <div className='min-h-[100dvh] h-full   flex flex-col'>
        <CompanyName />

        <WellcomeScrollSect2 />
      </div>
      {/* <HeroSec1 /> */}
      <WhyChooseUs />
      <SingleService />
      <VentilationCalculatorHero />
      {/* <HeroSwiper /> */}
      {/* <ServicesSect3 /> */}
    </main>
  );
}
