import React from 'react';

function Footer() {
  return (
    <div
      className='relative h-[400px]'
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className='fixed bottom-0 h-[400px] w-full bg-[#45444f] text-white'>
        <div className='max-w-[1440px] w-full mx-auto flex flex-col pt-[50px] justify-between px-[30px] h-full'>
          {/* Top Section */}
          <div className='flex flex-wrap justify-between mb-[20px]'>
            {/* Company Info */}
            <div>
              <h2 className='text-xl font-semibold'>[Your Company Name]</h2>
              <p className='mt-2'>📍 [Company Address], [City, Country]</p>
              <p>
                📧 Email:{' '}
                <a href='mailto:your@email.com' className='underline'>
                  your@email.com
                </a>
              </p>
              <p>
                📞 Phone:{' '}
                <a href='tel:+1234567890' className='underline'>
                  +123 456 7890
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-lg font-semibold'>Quick Links</h3>
              <ul className='mt-2 space-y-1'>
                <li>
                  <a href='/' className='hover:underline'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/about' className='hover:underline'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='/services' className='hover:underline'>
                    Services
                  </a>
                </li>
                <li>
                  <a href='/projects' className='hover:underline'>
                    Projects
                  </a>
                </li>
                <li>
                  <a href='/contact' className='hover:underline'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className='text-lg font-semibold'>Follow Us</h3>
              <ul className='mt-2 space-y-1'>
                <li>
                  <a href='#' className='hover:underline'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:underline'>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='flex justify-between items-end mb-10 h-full border-t border-gray-600 pt-4 text-sm'>
            <p>
              © {new Date().getFullYear()} [Your Company Name]. All rights
              reserved.
            </p>
            <div className='flex space-x-2'>
              <a href='/privacy-policy' className='hover:underline'>
                Privacy Policy
              </a>
              <a href='/terms' className='hover:underline'>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
