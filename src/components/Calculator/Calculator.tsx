'use client';
import React, { useState } from 'react';
import { calculateVentilation } from './calculations';

function Calculator() {
  const [kitchen, setKitchen] = useState<number | null>(null);
  const [toilet, setToilet] = useState<number | null>(null);
  const [shaxta, setShaxta] = useState<number | null>(null);
  const [kitchenEType, setKitchenEType] = useState<string>('');
  const [samzareuloGamwovi, setSamzareuloGamwovi] =
    useState<string>('meqanikuri');
  const [samzareulosShaxtisSigane, setSamzareulosShaxtisSigane] = useState<
    number | string
  >(0);
  const [WCShaxtisSigane, setWCShaxtisSigane] = useState<number | string>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!toilet || !kitchen || !shaxta) return;

    const results = calculateVentilation(kitchen, toilet, shaxta, kitchenEType);
    setSamzareulosShaxtisSigane(results.samzareulosShaxtisSigane);
    setWCShaxtisSigane(results.WCShaxtisSigane);
  };

  return (
    <main className='max-w-[1440px] w-full h-[300vh] mx-auto pt-20'>
      <h2 className='mb-10'>Calculate</h2>

      <form className='flex flex-col gap-2.5' onSubmit={handleSubmit}>
        <label htmlFor='kitchen'>რამდენი სამზარეულოა დაერთებული შახტაზე?</label>
        <input
          id='kitchen'
          type='number'
          value={kitchen || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setKitchen(Number(e.target.value));
          }}
          title='kitchen'
          placeholder='kitchen'
          className='border border-black'
        />

        <label htmlFor='toilet'>რამდენი საპირფარეშოა დაერთებული შახტაზე?</label>
        <input
          id='toilet'
          type='number'
          value={toilet || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setToilet(Number(e.target.value));
          }}
          title='toilet'
          placeholder='toilet'
          className='border border-black'
        />

        <label htmlFor='shaxta'>შახტის სიგანე?</label>
        <input
          id='shaxta'
          type='number'
          value={shaxta || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setShaxta(Number(e.target.value));
          }}
          title='Shaxta'
          placeholder='შახტა'
          className='border border-black'
        />

        <label htmlFor='kitchenEType'>სამზარეულოს ტიპი</label>
        <input
          id='kitchenEType'
          value={kitchenEType}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setKitchenEType(e.target.value);
          }}
          title='kitchenEType'
          placeholder='kedelSi Tu hudze'
          className='border border-black'
        />

        <button type='submit'>Calculate</button>
      </form>

      <div className='mt-8'>
        {kitchen && <p>Kitchen count: {kitchen}</p>}
        {toilet && <p>Toilet count: {toilet}</p>}
        {shaxta && <p>shaxta sigane: {shaxta}</p>}
        {kitchenEType && <p>samzareulos tipi: {kitchenEType}</p>}

        {samzareulosShaxtisSigane !== 0 && (
          <p>samzareulos shaxtis sigane: {samzareulosShaxtisSigane}</p>
        )}
        {WCShaxtisSigane !== 0 && <p>WC shaxtis sigane: {WCShaxtisSigane}</p>}
        <div> samzareulosShaxtisSigane: {samzareulosShaxtisSigane}</div>
        <p> WCShaxtisSigane: {WCShaxtisSigane}</p>
      </div>
    </main>
  );
}

export default Calculator;
