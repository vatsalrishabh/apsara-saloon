import './Hero.css';
import makeup from '@/assets/images/makeup.png';
import blogImage from '@/assets/images/card2.png';
import Image from 'next/image';

const Section = ({}) => {
  return (
    <section className='w-full bg-secondary sectionBg py-8 md:py-12'>
      {/* Services Section */}
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-2xl md:text-4xl font-bold pb-6 md:pb-10'>
          What are you looking for?
        </h2>

        {/* Services Grid - Responsive */}
        <div className='services flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12'>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className='iconblock w-1/3 sm:w-1/4 md:w-auto px-2 py-4'>
              <div className='bg-secondary w-20 h-20 md:w-32 md:h-32 rounded-full flex justify-center items-center mx-auto'>
                <Image
                  src={makeup}
                  alt='services icons'
                  className='w-16 md:w-24'
                />
              </div>
              <p className='text-center pt-2 md:pt-4 text-sm md:text-base'>
                Make up
              </p>
            </div>
          ))}
        </div>

        {/* Info Section - Responsive Grid */}
        <div className='bg-white  m-auto  grid grid-cols-1 md:grid-cols-3 bg-primary md:bg-white w-100 p-4 md:p-8 w-100 mt-8 md:mt-12 rounded-lg shadow-sm'>
          {/* Services List */}
          <div className='list flex flex-col gap-3 md:gap-6 order-1 md:order-1'>
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className='listing w-full md:w-[80%] h-8 bg-primary flex items-center rounded-r-full'>
                <span className='listing2 rounded-r-full h-full w-1/4'></span>
                <p className='text-xs md:text-sm pl-2 text-white'>Peeling</p>
              </div>
            ))}
            <hr className='my-8 md:hidden border-t-2 border-gray-300 ' />
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. remaining
              essentially unchanged. It was popularised in the with theLorem
              Ipsum is simply dummy text of the printing and eentially
              unchanged.
            </p>
            <p className='pt-4 md:pt-8 font-bold text-secondary text-sm md:text-base cursor-pointer hover:underline'>
              Read More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
