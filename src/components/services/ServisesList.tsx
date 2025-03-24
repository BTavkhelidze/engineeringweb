import React from 'react';
import { HoverEffect } from '../ui/card-hover-effect';

const projects = [
  {
    id: 1,
    title: 'FLS',
  },
  {
    id: 2,
    title: 'Heating and cooling',
  },
  {
    id: 3,
    title: 'Air Ventilacion',
  },
  {
    id: 4,
    title: 'Plumbing',
  },
  {
    id: 5,
    title: 'Electrical',
  },
  {
    id: 6,
    title: 'Low Voltages',
  },
  {
    id: 7,
    title: 'Schedule Management Plan',
  },
  {
    id: 8,
    title: 'Cost Estumations',
  },
];

function ServisesList() {
  return (
    <div className='max-w-[1440px] mx-auto w-full'>
      <HoverEffect items={projects} />
    </div>
  );
}

export default ServisesList;
