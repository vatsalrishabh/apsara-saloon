'use client';
import { useState } from 'react';
import card1 from '@/assets/images/card1.png';
import card2 from '@/assets/images/card2.png';
import card3 from '@/assets/images/card3.png';
import Image from 'next/image';

const blogData = [
  {
    id: 1,
    title: 'Top Haircut Trends for Indian Women in 2024',
    author: 'Riya Sharma',
    category: 'Haircare',
    date: 'Jan 20, 2024',
    image: card1,
    description:
      "Explore the trending haircuts for Indian women this year! From layered cuts to curtain bangs, discover what’s hot in 2024 that suits Indian face shapes and hair textures. Expert tips from stylists at Apsara Salon, Bangalore.",
  },
  {
    id: 2,
    title: 'Natural Skincare Tips for Glowing Indian Skin',
    author: 'Dr. Meera Iyer',
    category: 'Skincare',
    date: 'Feb 5, 2024',
    image: card2,
    description:
      "Glowing skin is a must for every Indian wedding and festival. Learn how to use haldi, aloe vera, and sandalwood effectively. Dermatologist-approved tips from Apsara Salon’s skincare experts to get that glow naturally.",
  },
  {
    id: 3,
    title: 'How to Maintain Eyelash Extensions in Indian Weather',
    author: 'Sneha Nair',
    category: 'Beauty Tips',
    date: 'Mar 15, 2024',
    image: card3,
    description:
      "Humidity, dust, and sweat — Indian weather isn’t easy on your lashes. Learn how to care for your lash extensions to keep them intact and beautiful. Advice from our beauty professionals at Apsara Unisex Salon.",
  },
];

const Blog = () => {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className='h-auto py-5 md:py-0 md:min-h-screen w-full bg-[#a10550]'>
      <h2 className='text-center text-4xl font-bold text-white py-8'>Our Services</h2>
      <div className='flex w-full justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 w-[70%] gap-5'>
          {blogData.map((blog) => {
            const isExpanded = expandedIds.includes(blog.id);
            const truncated = blog.description.slice(0, 200) + '...';
            return (
              <div key={blog.id} className='bg-white rounded shadow-md overflow-hidden'>
                <Image src={blog.image} alt={blog.title} className='w-full h-auto' />
                <div className='details p-4'>
                  <p className='text-[#a10550] font-semibold'>{blog.title}</p>
                  <p className='text-[10px] pb-4'>
                    {blog.category} | {blog.author} | {blog.date}
                  </p>
                  <p className='text-[12px] text-left'>
                    {isExpanded ? blog.description : truncated}
                    <span
                      className='text-[#a10550] cursor-pointer'
                      onClick={() => toggleExpand(blog.id)}>
                      {isExpanded ? ' Show Less' : ' Read More'}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className='text-right pt-5 md:py-0 pr-12 cursor-pointer text-white'>
        View All
      </p>
    </div>
  );
};

export default Blog;
