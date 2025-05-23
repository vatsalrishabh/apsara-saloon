import Image from 'next/image';
import ladies from '@/assets/images/ladies.png';

const Section2 = ({}) => {
  return (
    <section
      id='about'
      className='scroll-mt-44 grid grid-cols-1 md:grid-cols-2 bg-white w-full md:w-4/5 mx-auto md:my-12'>
      
      {/* Text Content */}
      <div className='col1 bg-primary text-white p-6 md:p-12 flex flex-col justify-center order-2 md:order-1'>
        <h3 className='font-bold text-lg md:text-xl lg:text-2xl pb-3 md:pb-5'>
          Your Beauty, Our Passion.
        </h3>
        <p className='text-sm md:text-base'>
          At Apsara Unisex Salon, we believe beauty is for everyone. From precision haircuts and rejuvenating facials to expert grooming services for both men and women, our experienced team ensures every client feels confident, pampered, and truly valued. We combine modern techniques with a warm, personalized experience — because you deserve the best version of yourself.
        </p>
      </div>

      {/* Image */}
      <div className='col2 relative h-60 md:h-auto order-1 md:order-2'>
        <Image
          src={ladies}
          alt='Clients enjoying services at Apsara Unisex Salon'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </div>
    </section>
  );
};

export default Section2;
