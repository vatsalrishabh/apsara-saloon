'use client'; // Required for client-side interactivity (Carousel)

import './Hero.css';
import heroImage from '@/assets/images/hero.jpg';
import braids1 from '@/assets/images/braid1.jpg';
import braids2 from '@/assets/images/braid2.jpg';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Hero = ({}) => {
  return (
    <div id='home' className='scroll-mt-24 relative w-full h-screen'>
      {/* Carousel */}
      <Carousel className='w-full h-full'>
        <CarouselContent>
          {[heroImage, braids1, braids2].map((image, index) => (
            <CarouselItem key={index} className='relative h-screen'>
              <Image
                src={image}
                alt={`Hero image ${index + 1}`}
                fill
                className='object-cover object-top'
                priority={index === 0} // Only prioritize first image
                sizes='100vw'
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Hidden on mobile */}
        <CarouselPrevious className='hidden md:flex left-4 text-primary border-primary' />
        <CarouselNext className='hidden md:flex right-4 text-primary border-primary' />
      </Carousel>

      {/* Hero Text Content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30'>
        <h1 className='text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-space1 capitalize font-poppins mb-4 md:mb-6'>
          Letting your true beauty shine
        </h1>
        <Link
          href='#'
          className='inline-block mt-2 md:mt-4 cursor-pointer tracking-space1 text-sm sm:text-[14px] px-6 py-2 sm:px-8 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-primary transition-colors duration-300'>
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
