import CompanyName from '@/components/LandingPage/companyName';
import { HeroSec1 } from '@/components/LandingPage/HeroSect1';
import ServicesSect3 from '@/components/LandingPage/ServicesSect3';
import { WellcomeScrollSect2 } from '@/components/LandingPage/WellcomeScrollSect2';

export default function Home() {
  return (
    <div className='bg-[#f7f5ed] '>
      <CompanyName />
      <WellcomeScrollSect2 />
      <HeroSec1 />
      <ServicesSect3 />

      <p>hello</p>
    </div>
  );
}
