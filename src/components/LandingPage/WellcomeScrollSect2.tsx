'use client';

import { motion } from 'framer-motion';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { useTranslations } from 'next-intl';

// Animation variants for the heading and paragraph
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    // transition: { delay: 1.2, ease: 'easeOut' },
  },
};

export function WellcomeScrollSect2() {
  const t = useTranslations('AboutUsHero');
  const words = `${t('title')}`;
  return (
    <motion.div
      className='max-w-[1280px] mx-auto flex flex-col md:flex-row items-center px-6 pt-20 pb-16 gap-8 '
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className='flex-1' variants={itemVariants}>
        <h2 className='text-3xl md:text-4xl font-light tracking-wide text-gray-800  leading-tight'>
          <TextGenerateEffect words={words} duration={1.2} />
        </h2>
      </motion.div>

      <motion.div
        className='flex-1  flex justify-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      >
        <p className='text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md '>
          From <span className='font-medium'>structural engineering</span> to{' '}
          <span className='font-medium'>project management</span>, we ensure{' '}
          <span className='text-blue-500 dark:text-blue-400'>precision</span>,{' '}
          <span className='text-blue-500 dark:text-blue-400'>
            sustainability
          </span>
          , and{' '}
          <span className='text-blue-500 dark:text-blue-400'>efficiency</span>{' '}
          in every project. Whether it’s designing resilient buildings,
          optimizing infrastructure, or driving technological advancements,
          we’re here to engineer a better tomorrow.
        </p>
      </motion.div>
    </motion.div>
  );
}
