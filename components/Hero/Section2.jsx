import Image from 'next/image';
import ladies from '@/assets/images/ladies.png';

const Section2 = ({}) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 bg-white w-full md:w-4/5 mx-auto my-8 md:my-12'>
      {/* Text Content - First on mobile */}
      <div className='col1 bg-primary text-white p-6 md:p-12 flex flex-col justify-center order-2 md:order-1'>
        <h3 className='font-bold text-lg md:text-xl lg:text-2xl pb-3 md:pb-5'>
          We take care of our clients and our people.
        </h3>
        <p className='text-sm md:text-base'>
          Share your company's mission, vision, or background with your
          potential clients. Set yourself apart from the competition with a
          strong brand persona that puts your clients first.
        </p>
      </div>

      {/* Image - Second on mobile */}
      <div className='col2 relative h-48 md:h-auto order-1 md:order-2'>
        <Image
          src={ladies}
          alt='Happy ladies at our salon'
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 50vw'
        />
      </div>
    </section>
  );
};

export default Section2;
