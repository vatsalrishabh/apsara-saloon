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

const Section = ({}) => {
  return (
    <section
      id='services'
      className='scroll-mt-16 w-full  bg-secondary sectionBg pt-8 md:py-12'>
      {/* Services Section */}

      <h2 className='text-center text-2xl md:text-4xl font-bold pb-6 md:pb-10'>
        What are you looking for?
      </h2>

      {/* Services Grid - Responsive */}
      <div className='servicesWrap m-auto w-100 md:w-[80%] lg:w-[80%] justify-center gap-4'>
        <div className='flex justify-center gap-4 flex-wrap'>
          <div className='services flex flex-wrap justify-center flex-col items-center gap-2'>
            {
              <div className='serviceCard iconblock'>
                <div
                  className='photoWrap w-36 h-36 rounded-full flex justify-center items-center mx-auto bg-cover bg-center'
                  style={{ backgroundImage: `url(${boho.src})` }}></div>
                <div className='imageCard flex items-center justify-center'>
                  <Link
                    href='#'
                    className='text-center pt-2 md:pt-4  md:text-base text-white'>
                    Book Now
                  </Link>
                </div>
              </div>
            }
            <p>Boho</p>
          </div>
          <div className='services flex flex-wrap justify-center flex-col items-center gap-2'>
            {
              <div className='serviceCard iconblock'>
                <div
                  className=' w-36 h-36 rounded-full flex justify-center items-center mx-auto bg-cover bg-center'
                  style={{ backgroundImage: `url(${gypsy.src})` }}></div>
                <div className='imageCard flex items-center justify-center'>
                  <Link
                    href='#'
                    className='text-center pt-2 md:pt-4  md:text-base text-white'>
                    Book Now
                  </Link>
                </div>
              </div>
            }
            <p>Gypsy</p>
          </div>
          <div className='services flex flex-wrap justify-center flex-col items-center gap-2'>
            {
              <div className='serviceCard iconblock'>
                <div
                  className=' w-36 h-36 rounded-full flex justify-center items-center mx-auto bg-cover bg-center'
                  style={{ backgroundImage: `url(${largeBoho.src})` }}></div>
                <div className='imageCard flex items-center justify-center'>
                  <Link
                    href='#'
                    className='text-center pt-2 md:pt-4  md:text-base text-white'>
                    Book Now
                  </Link>
                </div>
              </div>
            }
            <p>Large Boho</p>
          </div>
          <div className='services flex flex-wrap justify-center flex-col items-center gap-2'>
            {
              <div className='serviceCard iconblock'>
                <div
                  className=' w-36 h-36 rounded-full flex justify-center items-center mx-auto bg-cover bg-center'
                  style={{
                    backgroundImage: `url(${largeKnotless.src})`,
                  }}></div>
                <div className='imageCard flex items-center justify-center'>
                  <Link
                    href='#'
                    className='text-center pt-2 md:pt-4  md:text-base text-white'>
                    Book Now
                  </Link>
                </div>
              </div>
            }
            <p>Large Knotless</p>
          </div>
          <div className='services flex flex-wrap justify-center flex-col items-center gap-2'>
            {
              <div className='serviceCard iconblock'>
                <div
                  className=' w-36 h-36 rounded-full flex justify-center items-center mx-auto bg-cover bg-center'
                  style={{ backgroundImage: `url(${kids.src})` }}></div>
                <div className='imageCard flex items-center justify-center'>
                  <Link
                    href='#'
                    className='text-center pt-2 md:pt-4  md:text-base text-white'>
                    Kid Braids
                  </Link>
                </div>
              </div>
            }
            <p>Boho</p>
          </div>
        </div>
      </div>

      {/* Info Section - Responsive Grid */}
      <div className='bg-white   m-auto  grid grid-cols-1 md:grid-cols-3 bg-primary md:bg-white w-100 p-4 md:p-8 w-full md:w-[70%] lg:w-[70%] mt-8 md:mt-12 md:rounded lg:rounded shadow-sm '>
        {/* Services List */}
        <div className='list flex flex-col gap-6 md:gap-6 order-1 md:order-1 mb-5 md:mb-0 lg:mb-0'>
          {braidStyles.map((style, i) => (
            <StyleList key={i} styles={style} />
          ))}
        </div>

        {/* Image - Centered on mobile */}
        <div className='image w-40 h-40 md:w-64 md:h-64 mx-auto my-6 md:my-0 order-3 md:order-2 flex justify-center mt-12'>
          <Image
            src={blogImage}
            alt='making up image'
            width={250}
            height={250}
            className='object-cover rounded-full w-full h-full'
          />
        </div>

        {/* Details */}

        <div className='details order-2 md:order-3 px-2 md:px-0'>
          <p className='font-semibold text-md md:text-lg'>Peeling</p>
          <p className='text-xs md:text-sm text-green-700 my-1 md:my-2'>
            $50 - $80
          </p>
          <p className='text-xs md:text-sm text-gray-600 line-clamp-4 md:line-clamp-none'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. remaining essentially
            unchanged. It was popularised in the with theLorem Ipsum is simply
            dummy text of the printing and eentially unchanged.
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
