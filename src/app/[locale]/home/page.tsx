import CompanyName from '@/components/LandingPage/companyName';
// import { HeroSec1 } from '@/components/LandingPage/HeroSect1';

import SingleService from '@/components/LandingPage/HeroSwiper/SingleService';
import VentilationCalculatorHero from '@/components/LandingPage/VentilationCalculatorHero';
import { WellcomeScrollSect2 } from '@/components/LandingPage/WellcomeScrollSect2';
import WhyChooseUs from '@/components/LandingPage/WyhChooseUs';
import MotionInViewSection from '@/components/ui/MotionInViewSectionProps';

export default function Home() {
  return (
    <main>
      <div className='min-h-[100dvh] h-full   flex flex-col'>
        <CompanyName />

        <WellcomeScrollSect2 />
      </div>
      {/* <HeroSec1 /> */}
      <MotionInViewSection delay={0.3}>
        <WhyChooseUs />
      </MotionInViewSection>
      <MotionInViewSection delay={0.3}>
        <SingleService />
      </MotionInViewSection>
      <MotionInViewSection delay={0.3}>
        <VentilationCalculatorHero />
      </MotionInViewSection>
      {/* <HeroSwiper /> */}
      {/* <ServicesSect3 /> */}
    </main>
  );
}
