'use client';
import Footer from '@/components/Footer/Footer';

import { usePathname } from 'next/navigation';
import React from 'react';

const LayoutClientSide = () => {
  const pathName = usePathname();

  if (pathName.includes('/services/')) return null;

  return <Footer />;
};

export default LayoutClientSide;
