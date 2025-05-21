import './Component.css';

import dayjs from 'dayjs';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faReddit,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faCopy, faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({}) => {
  const currentYear = dayjs().format('YYYY');

  return (
    <footer className='w-full bg-primary font-poppins'>
      {/* Top Section */}
      <div className='w-full px-4 md:px-6 lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto py-6 md:py-8 text-white'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0'>
          {/* Contact Info - Center on mobile */}
          <p className='text-sm md:text-base text-center md:text-left w-1/2'>
           Apsara Unisex Salon 
#301/43, 1st floor 59th cross 3rd block bhashyam circle Rajajinagar Bangalore 10 | +91 99807 88144
          </p>

          {/* Social Icons */}
          <div className='social flex gap-4 md:gap-5 text-2xl md:text-3xl text-secondary'>
            <a
              href='#'
              aria-label='Instagram'
              className='hover:text-white transition-colors'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href='#'
              aria-label='Facebook'
              className='hover:text-white transition-colors'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href='#'
              aria-label='Twitter'
              className='hover:text-white transition-colors'>
              <FontAwesomeIcon icon={faX} />
            </a>
            <a
              href='#'
              aria-label='Pinterest'
              className='hover:text-white transition-colors'>
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a
              href='#'
              aria-label='Reddit'
              className='hover:text-white transition-colors'>
              <FontAwesomeIcon icon={faReddit} />
            </a>
            <a
              href='#'
              aria-label='TikTok'
              className='hover:text-white transition-colors'>
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bg-[#7e043e] py-4 md:py-5 w-full'>
        <div className='w-full px-4 md:px-6 lg:w-[90%] xl:w-[80%] 2xl:w-[70%] mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-white'>
            {/* Copyright */}
            <p className='text-xs md:text-sm text-center md:text-left tracking-space1'>
              <FontAwesomeIcon icon={faCopyright} /> April 2025 - {currentYear}{' '}
              Glam. All Rights Reserved.
            </p>

            {/* Legal Links */}
            <div className='flex flex-wrap justify-center gap-3 md:gap-5 text-xs md:text-sm'>
              <a href='#' className='hover:underline'>
                Terms & Conditions
              </a>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
