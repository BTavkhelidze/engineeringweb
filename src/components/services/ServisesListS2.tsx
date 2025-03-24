import Image from 'next/image';
import React from 'react';
import { AirVent, Fire, FireAlerm } from '../../../public';

function ServisesListS2() {
  return (
    <div className='max-w-[1440px] mx-auto w-full px-6 py-20 flex flex-col gap-5 '>
      {/* Fire and Life Safety */}
      <section id='fire-safety' className='pb-24 mt-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Fire & Life Safety
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              Precision-engineered fire protection and safety systems, ensuring
              compliance through advanced risk assessment and evacuation design.
            </p>
          </div>
          <div className='relative overflow-hidden group'>
            <Image
              src={Fire}
              alt='Fire safety systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
        </div>
      </section>

      {/* Heating and Cooling */}
      <section id='heating-cooling' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='order-2 md:order-1 relative overflow-hidden group'>
            <Image
              src={FireAlerm}
              alt='HVAC systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
          <div className='order-1 md:order-2 space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Heating & Cooling
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              Innovative HVAC solutions blending efficiency, comfort, and
              sustainability for modern spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Air Ventilation */}
      <section id='air-ventilation' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Air Ventilation
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              Sleek ventilation designs enhancing air quality with seamless
              integration of natural and mechanical systems.
            </p>
          </div>
          <div className='relative overflow-hidden group'>
            <Image
              src={AirVent}
              alt='Ventilation systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
        </div>
      </section>

      {/* Plumbing */}
      <section id='plumbing' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='order-2 md:order-1 relative overflow-hidden group'>
            <Image
              src={FireAlerm}
              alt='Plumbing systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
          <div className='order-1 md:order-2 space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Plumbing
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              Streamlined plumbing systems for water management, designed for
              performance and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Electrical Engineering */}
      <section id='electrical' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Electrical
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              Cutting-edge electrical solutions for power distribution and
              energy efficiency, built for reliability.
            </p>
          </div>
          <div className='relative overflow-hidden group'>
            <Image
              src={FireAlerm}
              alt='Electrical systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
        </div>
      </section>

      {/* Low Voltage Systems */}
      <section id='low-voltage' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='order-2 md:order-1 relative overflow-hidden group'>
            <Image
              src={FireAlerm}
              alt='Low voltage systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
          <div className='order-1 md:order-2 space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Low Voltage Systems
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              Smart low-voltage systems for security and automation, enhancing
              connectivity effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Lighting Engineering */}
      <section id='lighting' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Lighting Engineering
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              Our lighting design services focus on energy efficiency,
              aesthetics, and functionality. We create customized lighting plans
              using advanced technologies such as LED, daylight integration, and
              smart lighting controls for various applications
            </p>
          </div>
          <div className='relative overflow-hidden group'>
            <Image
              src={FireAlerm}
              alt='Lighting systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
        </div>
      </section>

      <section id='low-voltage' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='order-2 md:order-1 relative overflow-hidden group'>
            <Image
              src={FireAlerm}
              alt='Low voltage systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
          <div className='order-1 md:order-2 space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              BIM Services
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              We provide Building Information Modeling (BIM) services to improve
              coordination, reduce design conflicts, and enhance project
              visualization. Our detailed 3D models help streamline the planning
              and execution of complex engineering systems.
            </p>
          </div>
        </div>
      </section>

      <section id='electrical' className='mb-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='space-y-6'>
            <h3 className='text-3xl font-light tracking-wide text-gray-800'>
              Schedule Management
            </h3>
            <p className='text-gray-600 text-base leading-relaxed max-w-md'>
              We develop comprehensive project schedules, ensuring efficient
              coordination between disciplines. Our services include timeline
              optimization, risk assessment, and proactive delay mitigation
              strategies to keep projects on track
            </p>
          </div>
          <div className='relative overflow-hidden group'>
            <Image
              src={FireAlerm}
              alt='Electrical systems'
              className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105'
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServisesListS2;
