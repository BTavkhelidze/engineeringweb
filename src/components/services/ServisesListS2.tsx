'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  FaFireExtinguisher,
  FaSnowflake,
  FaWind,
  FaFaucet,
  FaBolt,
  FaNetworkWired,
  FaLightbulb,
  FaCubes,
  FaMoneyCheckAlt,
  FaUserTie,
} from 'react-icons/fa';

import Link from 'next/link';
import { TextGenerateEffect } from '../ui/text-generate-effect';

function ServisesListS2() {
  const t = useTranslations('Services');

  const words = 'Services';

  const services = [
    {
      id: 'fire-safety',
      title: t('fls'),
      description: t('flsDescr'),
      icon: <FaFireExtinguisher className='text-red-500 text-3xl' />,
    },
    {
      id: 'heating-cooling',
      title: t('Heating'),
      description: t('HeatingDescr'),
      icon: <FaSnowflake className='text-blue-400 text-3xl' />,
    },
    {
      id: 'air-ventilation',
      title: t('Ventilation'),
      description: t('VentilationDescr'),
      icon: <FaWind className='text-cyan-400 text-3xl' />,
    },
    {
      id: 'plumbing',
      title: t('Water'),
      description: t('WaterDescr'),
      icon: <FaFaucet className='text-blue-600 text-3xl' />,
    },
    {
      id: 'electrical',
      title: t('Electrical'),
      description: t('ElectricalDescr'),
      icon: <FaBolt className='text-yellow-400 text-3xl' />,
    },
    {
      id: 'low-voltage',
      title: t('LowVoltage'),
      description: t('LowVoltageDescr'),
      icon: <FaNetworkWired className='text-purple-400 text-3xl' />,
    },
    {
      id: 'lighting',
      title: t('Lighting'),
      description: t('LightingDescr'),
      icon: <FaLightbulb className='text-amber-300 text-3xl' />,
    },
    {
      id: 'bim',
      title: t('BIM'),
      description: t('BIMDescr'),
      icon: <FaCubes className='text-indigo-500 text-3xl' />,
    },
    {
      id: 'cost',
      title: t('Cost'),
      description: t('CostDescr'),
      icon: <FaMoneyCheckAlt className='text-green-500 text-3xl' />,
    },
    {
      id: 'consulting',
      title: t('Consulting'),
      description: t('ConsultingDescr'),
      icon: <FaUserTie className='text-sky-500 text-3xl' />,
    },
  ];

  return (
    <section className='flex-1 w-full relative '>
      <div className=' max-w-[1280px] mx-auto w-full px-6 '>
        <motion.div
          className='flex-1 text-white text-center sm:text-start'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2 className='text-3xl md:text-4xl font-light tracking-wide text-gray-800 dark:text-white leading-tight'>
            <TextGenerateEffect words={words} duration={1.2} />
          </h2>
        </motion.div>
        <ul className='flex justify-stretch  w-full gap-2  mt-4 flex-col sm:flex-row  flex-wrap sm:justify-start'>
          {services.map((ser, index) => (
            <li key={index} className='flex  mt-4 sm:mt-10'>
              <Link
                href={`/services/${ser.id}`}
                className='relative w-full sm:w-[230px]'
              >
                <motion.div
                  className='relative w-full h-[180px] cursor-pointer border border-[#18181B] bg-[#0C1013] rounded-[8px] overflow-hidden flex items-center justify-center'
                  whileHover={{
                    scale: [null, 1.04],
                    transition: {
                      duration: 0.5,
                      times: [0, 0.6],
                      ease: ['easeInOut', 'easeOut'],
                    },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                >
                  {ser.icon}
                  <div className='absolute w-full h-[55px] text-sm   flex items-center bg-[#18181B] text-white bottom-0 text-start px-2 '>
                    {ser.title}
                  </div>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServisesListS2;
