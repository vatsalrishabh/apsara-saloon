'use client';

import './Hero.css';
import Image from 'next/image';
import Link from 'next/link';

import StyleList from '../StyleList';
import braidStyles from '@/lib/braidsStyles';

import boho from '@/assets/images/boho.jpg';
import gypsy from '@/assets/images/gypsy.jpeg';
import largeBoho from '@/assets/images/large-boho.jpeg';
import largeKnotless from '@/assets/images/large-knotless.jpeg';
import kids from '@/assets/images/kids.jpg';
import blogImage from '@/assets/images/card2.png';

import haircut from '@/assets/images/haircut.jpg';
import facial from '@/assets/images/facial.jpg';
import hairsmooth from '@/assets/images/hairsmooth.png';
import bridal from '@/assets/images/bridal.png';
import waxing from '@/assets/images/waxing.png';





// const servicesData = [
//   { name: 'Boho', image: boho, href: '#book' },
//   { name: 'Gypsy', image: gypsy, href: '#' },
//   { name: 'Large Boho', image: largeBoho, href: '#' },
//   { name: 'Large Knotless', image: largeKnotless, href: '#' },
//   { name: 'Kid Braids', image: kids, href: '#' },
// ];
const servicesData = [
  {
    name: 'Haircut',
    image: haircut, // replace with actual image import
    href: '#book',
    price: '₹300 onwards',
  },
  {
    name: 'Facials',
    image: facial, // replace with actual image import
    href: '#book',
    price: '₹800 onwards',
  },
  {
    name: 'Hair Smoothening',
    image: hairsmooth, // replace with actual image import
    href: '#book',
    price: '₹2500 onwards',
  },
  {
    name: 'Bridal Makeup',
    image: bridal, // replace with actual image import
    href: '#book',
    price: '₹5000 onwards',
  },
  {
    name: 'Waxing',
    image: waxing, // replace with actual image import
    href: '#book',
    price: '₹1000 (Full body)',
  },
];


const Section = () => {
  return (
    <section id="services" className="scroll-mt-16 w-full bg-secondary sectionBg pt-8 md:py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-bold pb-6 md:pb-10">
        What are you looking for?
      </h2>

      {/* Services Grid */}
      <div className="servicesWrap m-auto w-full md:w-[80%] lg:w-[80%] justify-center gap-4">
        <div className="flex justify-center gap-4 flex-wrap">
          {servicesData.map(({ name, image, href }, i) => (
            <div key={i} className="services flex flex-col items-center gap-2">
              <div className="serviceCard iconblock">
                <div
                  className="photoWrap w-36 h-36 rounded-full bg-cover bg-center mx-auto"
                  style={{ backgroundImage: `url(${image.src})` }}
                ></div>
                <div className="imageCard flex justify-center">
                  <Link href={href} className="text-white pt-2 md:pt-4 md:text-base">
                    Book Now
                  </Link>
                </div>
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white grid grid-cols-1 md:grid-cols-3 w-full md:w-[70%] lg:w-[70%] m-auto mt-8 md:mt-12 p-4 md:p-8 md:rounded shadow-sm">
        {/* Services List */}
        <div className="list flex flex-col gap-6 order-1 mb-5 md:mb-0">
          {braidStyles.map((style, i) => (
            <StyleList key={i} styles={style} />
          ))}
        </div>

        {/* Center Image */}
        <div className="image w-40 h-40 md:w-64 md:h-64 mx-auto my-6 md:my-0 order-3 md:order-2">
          <Image
            src={blogImage}
            alt="Braiding styles"
            width={250}
            height={250}
            className="object-cover rounded-full w-full h-full"
          />
        </div>

        {/* Service Details */}
    <div className="details order-2 md:order-3 px-2 md:px-0">
  <p className="font-semibold text-md md:text-lg">Facial & Skincare Services</p>
  <p className="text-xs md:text-sm text-green-700 my-1 md:my-2">₹499 - ₹2499</p>
  <p className="text-xs md:text-sm text-gray-600 line-clamp-4 md:line-clamp-none">
    Rejuvenate your skin with our premium facial treatments tailored to your skin type. From glow-boosting clean-ups to anti-aging facials, our experts ensure visible results with high-quality products. Suitable for all skin types — perfect before events or as a regular skincare routine.
  </p>
  <p className="pt-4 md:pt-8 font-bold text-secondary text-sm md:text-base cursor-pointer hover:underline">
    Read More
  </p>
</div>

      </div>
    </section>
  );
};

export default Section;
