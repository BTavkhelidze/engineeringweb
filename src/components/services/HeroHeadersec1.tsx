'use client';
import { animationDiv } from '@/framer';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface IServise {
  id: number;
  title: string;
  sectionId: string;
}

const projects: IServise[] = [
  { id: 1, title: 'FLS', sectionId: 'fire-safety' },
  { id: 2, title: 'Heating & Cooling', sectionId: 'heating-cooling' },
  { id: 3, title: 'Air Ventilation', sectionId: 'air-ventilation' },
  { id: 4, title: 'Plumbing', sectionId: 'plumbing' },
  { id: 5, title: 'Electrical', sectionId: 'electrical' },
  { id: 6, title: 'Low Voltage', sectionId: 'low-voltage' },
  { id: 7, title: 'Lighting', sectionId: 'lighting' },
  { id: 8, title: 'Bim', sectionId: 'bim' },
  { id: 9, title: 'Cost', sectionId: 'cost' },
  { id: 10, title: 'consulting', sectionId: 'consulting' },
];

function HeroHeadersec1() {
  const [activeWord, setActiveWord] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition +
        window.pageYOffset -
        window.innerHeight / 2 +
        element.offsetHeight / 2;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='max-w-[1280px] mx-auto w-full px-6 py-16'>
        <motion.div
          variants={animationDiv}
          initial='initial'
          animate='animate'
          className='flex flex-wrap gap-6'
        >
          {projects.map((project, i) => (
            <motion.span
              initial={{ opacity: 1 }}
              animate={
                activeWord && activeWord !== i + 1
                  ? { opacity: 0.3 }
                  : { opacity: 1 }
              }
              key={project.id}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='text-3xl font-light text-gray-800 tracking-wide 
                cursor-pointer hover:text-gray-600 transition-colors duration-300'
              onMouseEnter={() => setActiveWord(i + 1)}
              onMouseLeave={() => setActiveWord(null)}
              onClick={() => scrollToSection(project.sectionId)}
            >
              {project.title}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HeroHeadersec1;
