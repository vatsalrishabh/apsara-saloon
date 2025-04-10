'use client';
import { useState } from 'react';
import card1 from '@/assets/images/card1.png';
import card2 from '@/assets/images/card2.png';
import card3 from '@/assets/images/card3.png';
import Image from 'next/image';

const Blog = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with theLorem Ipsum is simply dummy text of the printing and essentially unchanged.";

  const truncatedDescription = description.slice(0, 250) + '...';

  return (
    <div className='h-100 py-5 md:py-0 md:h-screen w-full bg-[#a10550]'>
      <h2 className='text-center text-4xl font-bold text-white py-8'>Blog</h2>
      <div className='flex  w-full justify-center'>
        <div className='grid grid-cols-1  md:grid-cols-3 w-[70%] gap-5'>
          <div className='card1'>
            <Image src={card1} alt='Card Image' />
            <div className='details bg-white p-4'>
              <p className='text-[#a10550] font-semibold'>
                Best haircut for 2024 female
              </p>
              <p className='text-[10px] pb-4'>
                Haircut | Sophie Stone | Jan 20, 2024
              </p>
              <p className='text-[12px] text-left'>
                {isExpanded ? description : truncatedDescription}
                <span
                  className='text-[#a10550] cursor-pointer'
                  onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? ' Show Less' : ' Read More'}
                </span>
              </p>
            </div>
          </div>
          <div className='card2'>
            <Image src={card2} alt='Card Image' />
            <div className='details bg-white p-4'>
              <p className='text-[#a10550] font-semibold'>
                How to get clear skin fast
              </p>
              <p className='text-[10px] pb-4'>
                Skincare | Dr. Wade Warren | Feb 5, 2024
              </p>
              <p className='text-[12px] text-left'>
                {isExpanded ? description : truncatedDescription}
                <span
                  className='text-[#a10550] cursor-pointer'
                  onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? ' Show Less' : ' Read More'}
                </span>
              </p>
            </div>
          </div>
          <div className='card3'>
            <Image src={card3} alt='Card Image' />
            <div className='details bg-white p-4'>
              <p className='text-[#a10550] font-semibold'>
                How to clean lash extensions
              </p>
              <p className='text-[10px] pb-4'>
                Lashes | Lauren Walter | Mar 15, 2024
              </p>
              <p className='text-[12px] text-left'>
                {isExpanded ? description : truncatedDescription}
                <span
                  className='text-[#a10550] cursor-pointer'
                  onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? ' Show Less' : ' Read More'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className='text-right pt-5 md:py-0 pr-12 cursor-pointer text-white'>
        View All
      </p>
    </div>
  );
};

export default Blog;
