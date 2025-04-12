import CompanyName from '@/components/LandingPage/companyName';
import { HeroSec1 } from '@/components/LandingPage/HeroSect1';
import HeroSwiper from '@/components/LandingPage/HeroSwiper/HeroSwiper';
import { WellcomeScrollSect2 } from '@/components/LandingPage/WellcomeScrollSect2';

export default function Home() {
  return (
    <div className=' '>
      <CompanyName />
      <div className='mb-10'>
        <WellcomeScrollSect2 />
      </div>
      <HeroSec1 />
      <HeroSwiper />
      {/* <ServicesSect3 /> */}
    </div>
  );
}
