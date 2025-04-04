'use client';
import React, { useEffect, useState } from 'react';
import { calculateVentilation } from './calculations';
import { MultiStepLoader as Loader } from '../ui/multi-step-loader';
import { IconSquareRoundedX } from '@tabler/icons-react';

function Calculator() {
  const [kitchen, setKitchen] = useState<number | null>(null);
  const [toilet, setToilet] = useState<number | null>(null);
  const [shaxta, setShaxta] = useState<number | null>(null);
  const [kitchenEType, setKitchenEType] = useState<string>('');
  const [damper, setDamper] = useState<string>('yes');
  const [shaftVentT, setShaftVentT] = useState<string>('natural');
  const [loading, setLoading] = useState(false);
  const [splitHaersatari, setSplitHaersatari] = useState<boolean>(false);
  const [results, setResults] = useState<{
    samzareulosShaxtisSigane: number | string | (string | number)[];
    WCShaxtisSigane: number | string;
  } | null>(null);

  const loadingStates = [
    {
      text: `kitchen: ${kitchen} `,
    },
    {
      text: `toilet: ${toilet} `,
    },
    {
      text: `kitchenEType: ${kitchenEType} `,
    },
    {
      text: `shaxta: ${shaxta} `,
    },
    {
      text: `damper: ${damper} `,
    },
    {
      text: `shaftVentT: ${shaftVentT} `,
    },
  ];

  function customRound(value: number): number {
    if (value <= 75) return 50;
    if (value <= 115) return 100;
    if (value <= 165) return 150;
    if (value <= 215) return 200;
    if (value <= 265) return 250;
    if (value <= 315) return 300;
    if (value <= 365) return 350;
    if (value <= 415) return 400;
    if (value <= 465) return 450;
    if (value <= 515) return 500;
    if (value <= 565) return 550;
    if (value <= 615) return 600;
    if (value <= 665) return 650;
    if (value <= 715) return 700;
    if (value <= 765) return 750;
    if (value <= 815) return 800;
    if (value <= 865) return 850;
    if (value <= 915) return 900;
    if (value <= 965) return 950;
    return 1000; // For 966–1000
  }

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
      setSplitHaersatari(false);
    }
    setLoading(true);
    if (!toilet || !kitchen || !shaxta) return;

    setResults(
      calculateVentilation(
        kitchen,
        toilet,
        shaxta,
        kitchenEType,
        damper,
        shaftVentT,
        splitHaersatari
      )
    );

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    if (splitHaersatari) {
      handleSubmit();
    }
  }, [splitHaersatari]);

  return (
    <main className='max-w-md mx-auto p-4'>
      <h2 className='text-xl font-semibold mb-6 text-gray-800'>
        Ventilation Calculator
      </h2>

      <form onSubmit={handleSubmit} className='space-y-4'>
        {/* Input Fields */}
        {[
          {
            id: 'kitchen',
            label: 'Kitchens connected to shaft',
            value: kitchen,
            setter: setKitchen,
          },
          {
            id: 'toilet',
            label: 'Toilets connected to shaft',
            value: toilet,
            setter: setToilet,
          },
          {
            id: 'shaxta',
            label: 'Shaft width',
            value: shaxta,
            setter: setShaxta,
          },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type='number'
              value={field.value || ''}
              onChange={(e) => field.setter(Number(e.target.value))}
              className='w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
              required
            />
          </div>
        ))}

        {/* Select Fields */}
        {[
          {
            id: 'kitchenEType',
            label: 'Kitchen equipment type',
            value: kitchenEType,
            setter: setKitchenEType,
            options: [
              { value: '', label: 'Select type', disabled: true },
              { value: 'kedeli', label: 'კედელში (In wall)' },
              { value: 'hudze', label: 'ჰუდზე (On hood)' },
            ],
          },
          {
            id: 'damper',
            label: 'Damper required',
            value: damper,
            setter: setDamper,
            options: [
              { value: 'yes', label: 'Yes' },
              { value: 'no', label: 'No' },
            ],
          },
          {
            id: 'shaftVentT',
            label: 'Shaft ventilation type',
            value: shaftVentT,
            setter: setShaftVentT,
            options: [
              { value: 'natural', label: 'Natural' },
              { value: 'mechanical', label: 'Mechanical' },
            ],
          },
        ].map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              {field.label}
            </label>
            <select
              id={field.id}
              value={field.value}
              onChange={(e) => field.setter(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500'
            >
              {field.options.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors'
        >
          Calculate
        </button>
      </form>

      {/* Results */}

      <Loader loadingStates={loadingStates} loading={loading} duration={500} />
      {/* {loading && (
        <button
          title='button'
          type='button'
          className='fixed top-4 right-4 text-black dark:text-white z-[120]'
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className='h-10 w-10' />
        </button>
      )} */}
      {results && !loading && (
        <div className='mt-8 p-4 bg-gray-50 rounded'>
          <h3 className='font-medium text-gray-800 mb-2'>Results</h3>
          <div className='space-y-2'>
            <p className='text-sm'>
              Kitchen shaft width:{' '}
              <span className='font-medium'>
                {results.samzareulosShaxtisSigane}
              </span>
              {typeof results.samzareulosShaxtisSigane !== 'number' && (
                <>
                  <p
                    className='px-6 py-4 text-black border self-start font-light cursor-pointer bg-blue-400'
                    onClick={() => setSplitHaersatari(true)}
                  >
                    ორი ჰაერსატარი იყოს
                  </p>
                  <div>
                    <label htmlFor='splitHaersatari'>ორი ჰაერსატარი იყოს</label>
                    <input
                      title='haersataris gayofa'
                      type='checkbox'
                      checked={splitHaersatari}
                      onChange={() => setSplitHaersatari(true)}
                    />
                  </div>
                </>
              )}
            </p>

            <p className='text-sm'>
              WC duct size: {shaxta! - 100} :{' '}
              <span className='font-medium'>
                {customRound(Number(results.WCShaxtisSigane))}
              </span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Calculator;
