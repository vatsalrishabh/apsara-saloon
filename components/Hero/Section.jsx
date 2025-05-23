'use client';

import './Hero.css';
import boho from '@/assets/images/boho.jpg';
import gypsy from '@/assets/images/gypsy.jpeg';
import largeBoho from '@/assets/images/large-boho.jpeg';
import largeKnotless from '@/assets/images/large-knotless.jpeg';
import kids from '@/assets/images/kids.jpg';
import blogImage from '@/assets/images/card2.png';
import Image from 'next/image';
import Link from 'next/link';

import StyleList from '../StyleList';
import braidStyles from '@/lib/braidsStyles';

const Section = () => {
  return (
    <section
      id='services'
      className='scroll-mt-16 w-full bg-secondary sectionBg pt-8 md:py-12'
    >
      {/* Heading */}
      <h2 className='text-center text-2xl md:text-4xl font-bold pb-6 md:pb-10'>
        What are you looking for?
      </h2>

      {/* Services Grid */}
      <div className='servicesWrap m-auto w-full md:w-[80%] lg:w-[80%] justify-center gap-4'>
        <div className='flex justify-center gap-4 flex-wrap'>
          {/* Boho */}
          <div className='services flex flex-col items-center gap-2'>
            <div className='serviceCard iconblock'>
              <div
                className='photoWrap w-36 h-36 rounded-full bg-cover bg-center mx-auto'
                style={{ backgroundImage: `url(${boho.src})` }}
              ></div>
              <div className='imageCard flex justify-center'>
                <Link href='#book' className='text-white pt-2 md:pt-4 md:text-base'>
                  Book Now
                </Link>
              </div>
            </div>
            <p>Boho</p>
          </div>

          {/* Gypsy */}
          <div className='services flex flex-col items-center gap-2'>
            <div className='serviceCard iconblock'>
              <div
                className='w-36 h-36 rounded-full bg-cover bg-center mx-auto'
                style={{ backgroundImage: `url(${gypsy.src})` }}
              ></div>
              <div className='imageCard flex justify-center'>
                <Link href='#' className='text-white pt-2 md:pt-4 md:text-base'>
                  Book Now
                </Link>
              </div>
            </div>
            <p>Gypsy</p>
          </div>

          {/* Large Boho */}
          <div className='services flex flex-col items-center gap-2'>
            <div className='serviceCard iconblock'>
              <div
                className='w-36 h-36 rounded-full bg-cover bg-center mx-auto'
                style={{ backgroundImage: `url(${largeBoho.src})` }}
              ></div>
              <div className='imageCard flex justify-center'>
                <Link href='#' className='text-white pt-2 md:pt-4 md:text-base'>
                  Book Now
                </Link>
              </div>
            </div>
            <p>Large Boho</p>
          </div>

          {/* Large Knotless */}
          <div className='services flex flex-col items-center gap-2'>
            <div className='serviceCard iconblock'>
              <div
                className='w-36 h-36 rounded-full bg-cover bg-center mx-auto'
                style={{ backgroundImage: `url(${largeKnotless.src})` }}
              ></div>
              <div className='imageCard flex justify-center'>
                <Link href='#' className='text-white pt-2 md:pt-4 md:text-base'>
                  Book Now
                </Link>
              </div>
            </div>
            <p>Large Knotless</p>
          </div>

          {/* Kid Braids */}
          <div className='services flex flex-col items-center gap-2'>
            <div className='serviceCard iconblock'>
              <div
                className='w-36 h-36 rounded-full bg-cover bg-center mx-auto'
                style={{ backgroundImage: `url(${kids.src})` }}
              ></div>
              <div className='imageCard flex justify-center'>
                <Link href='#' className='text-white pt-2 md:pt-4 md:text-base'>
                  Book Now
                </Link>
              </div>
            </div>
            <p>Kid Braids</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className='bg-white grid grid-cols-1 md:grid-cols-3 w-full md:w-[70%] lg:w-[70%] m-auto mt-8 md:mt-12 p-4 md:p-8 md:rounded shadow-sm'>
        {/* Services List */}
        <div className='list flex flex-col gap-6 order-1 mb-5 md:mb-0'>
          {braidStyles.map((style, i) => (
            <StyleList key={i} styles={style} />
          ))}
        </div>

        {/* Center Image */}
        <div className='image w-40 h-40 md:w-64 md:h-64 mx-auto my-6 md:my-0 order-3 md:order-2'>
          <Image
            src={blogImage}
            alt='Braiding styles'
            width={250}
            height={250}
            className='object-cover rounded-full w-full h-full'
          />
        </div>

        {/* Service Details */}
        <div className='details order-2 md:order-3 px-2 md:px-0'>
          <p className='font-semibold text-md md:text-lg'>Hair Braiding Services</p>
          <p className='text-xs md:text-sm text-green-700 my-1 md:my-2'>
            ₹1500 - ₹4000
          </p>
          <p className='text-xs md:text-sm text-gray-600 line-clamp-4 md:line-clamp-none'>
            We offer a variety of braiding styles for all hair types and age groups. 
            Whether you're looking for Boho, Knotless, or Kids Braids, our experienced 
            stylists ensure neat, long-lasting results. We focus on scalp health, comfort, 
            and personalized styling right here in Bangalore.
          </p>
          <p className='pt-4 md:pt-8 font-bold text-secondary text-sm md:text-base cursor-pointer hover:underline'>
            Read More
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
