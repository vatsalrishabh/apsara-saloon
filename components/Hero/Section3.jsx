
import Calendar2 from '../ui/Calender2';
import Form from '../ui/Form';

const Section3 = ({}) => {
  

  return (
    <section
      id='book'
      className='scroll-mt-[18px] w-full min-h-screen md:h-[80vh] bg-secondary py-8 md:py-12'>
      <h2 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl py-6 md:py-12'>
        Book an Appointment
      </h2>
      <div className='booking grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-4 md:px-0 md:w-[90%] lg:w-[80%] mx-auto'>
        {/* Form - Always appears first */}
        <div className='w-full max-w-[600px] mx-auto lg:mx-0'>
          <Form />
        </div>

        {/* Calendar - Centers on mobile */}
        <div className='flex justify-center items-start '>
          <div className='w-full '>
            <Calendar2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
