import Image from 'next/image';
import React from 'react';
import { AirVent, Fire, FireAlerm } from '../../../public';
import { useTranslations } from 'next-intl';

function ServisesListS2() {
  const t = useTranslations('Services');

  const services = [
    {
      id: 'fire-safety',
      title: t('fls'),
      description: t('flsDescr'),
      image: Fire,
    },
    {
      id: 'heating-cooling',
      title: t('Heating'),
      description: t('HeatingDescr'),
      image: FireAlerm,
    },
    {
      id: 'air-ventilation',
      title: t('Ventilation'),
      description: t('VentilationDescr'),
      image: AirVent,
    },
    {
      id: 'plumbing',
      title: t('Water'),
      description: t('WaterDescr'),
      image: FireAlerm,
    },
    {
      id: 'electrical',
      title: t('Electrical'),
      description: t('ElectricalDescr'),
      image: FireAlerm,
    },
    {
      id: 'low-voltage',
      title: t('LowVoltage'),
      description: t('LowVoltageDescr'),
      image: FireAlerm,
    },
    {
      id: 'lighting',
      title: t('Lighting'),
      description: t('LightingDescr'),
      image: FireAlerm,
    },
    {
      id: 'bim',
      title: t('BIM'),
      description: t('BIMDescr'),
      image: FireAlerm,
    },
    {
      id: 'cost',
      title: t('Cost'),
      description: t('CostDescr'),
      image: FireAlerm,
    },
    {
      id: 'consulting',
      title: t('Consulting'),
      description: t('ConsultingDescr'),
      image: FireAlerm,
    },
  ];

  return (
    <div className='max-w-[1440px] mx-auto w-full px-6 py-20'>
      <div className='flex flex-col gap-24'>
        {services.map((service, index) => (
          <section key={service.id} id={service.id} className='relative'>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Image - appears first on even indexes */}
              <div
                className={`relative h-[350px] rounded-xl overflow-hidden group ${
                  index % 2 === 0 ? 'order-1' : 'order-2'
                }`}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-700/10 z-10' />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className='object-cover transition-all duration-500 group-hover:scale-105'
                  style={{ objectPosition: 'center' }}
                />
              </div>

              {/* Content - appears second on even indexes */}
              <div
                className={`space-y-6 ${
                  index % 2 === 0 ? 'order-2 md:pl-8' : 'order-1 md:pr-8'
                }`}
              >
                <span className='inline-block text-sm font-medium text-blue-600 mb-2'>
                  {`0${index + 1}`.slice(-2)}
                </span>
                <h3 className='text-3xl font-semibold text-gray-900'>
                  {service.title}
                </h3>
                <p className='text-gray-600 text-base leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </div>

            {/* Decorative element for every 3rd item */}
            {index % 3 === 0 && (
              <div className='absolute -right-20 -top-20 w-48 h-48 rounded-full bg-blue-100/50 blur-3xl -z-10' />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}

export default ServisesListS2;
