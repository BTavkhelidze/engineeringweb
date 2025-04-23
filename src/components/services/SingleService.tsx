'use client';

import Link from 'next/link';
import React, { JSX, useEffect, useMemo, useState } from 'react';
import {
  FaAngleLeft,
  FaAngleRight,
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
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// Define the type for a service item
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

interface SingleServiceProps {
  service: string;
}

function SingleService({ service }: SingleServiceProps) {
  const [curIndex, setCurIndex] = useState<number | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);
  const t = useTranslations('Services');

  const services: ServiceItem[] = useMemo(
    () => [
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
    ],
    [t]
  );

  useEffect(() => {
    const index = services.findIndex((el) => el.id === service);
    if (index !== -1) {
      setCurIndex(index);
    }
  }, [service, services]);
  if (curIndex === null) return <p>...loading</p>;
  const currentService = services[curIndex];

  const handlePrev = () => {
    if (curIndex > 0) {
      setCurIndex((prev) => prev! - 1);
    }
  };

  const handleNext = () => {
    if (curIndex < services.length - 1) {
      setCurIndex((prev) => prev! + 1);
    }
  };

  return (
    <div className='max-w-[1280px] mx-auto pt-10 flex flex-col h-screen'>
      <Link
        href='/services'
        className='flex gap-2 items-center'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <FaAngleLeft />
        <motion.span
          initial={{ x: 0 }}
          animate={isHover ? { x: 10 } : { x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Go Back
        </motion.span>
      </Link>

      <section className='relative w-full flex-1 flex flex-col items-center  text-center px-4  justify-center'>
        <div
          key={currentService.id}
          className='flex flex-col gap-10 max-w-[70%]'
        >
          <div className='mb-4'>{currentService.icon}</div>
          <h2 className='text-3xl font-bold mb-2'>{currentService.title}</h2>
          <p>{currentService.description}</p>
        </div>

        <div className='absolute bottom-10 right-10 z-10 flex gap-4'>
          {curIndex > 0 && (
            <motion.button
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
              type='button'
              title='Prev'
              className='flex gap-1 items-center px-3 py-2 justify-center bg-[#141C1D] text-sm rounded-sm cursor-pointer'
              onClick={handlePrev}
            >
              <FaAngleLeft /> PREV
            </motion.button>
          )}

          {curIndex < services.length - 1 && (
            <motion.button
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
              type='button'
              title='Next'
              className='flex gap-1 items-center px-3 py-2 justify-center bg-[#141C1D] text-sm rounded-sm cursor-pointer'
              onClick={handleNext}
            >
              NEXT <FaAngleRight />
            </motion.button>
          )}
        </div>
      </section>
    </div>
  );
}

export default SingleService;
