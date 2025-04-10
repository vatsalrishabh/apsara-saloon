import Link from 'next/link';
import '../Component.css';

const Form = ({}) => {
  return (
    <form
      action='Submit'
      className='bg-white p-6 md:p-8 lg:p-12 shadow-custom rounded-lg w-full max-w-2xl mx-auto'>
      {/* Name & Phone - Stack on mobile */}
      <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 mb-4'>
        <input
          type='text'
          className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none placeholder:text-gray-600'
          placeholder='Name'
        />
        <input
          type='tel'
          className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none placeholder:text-gray-600'
          placeholder='Phone'
        />
      </div>

      {/* Email */}
      <div className='mb-4'>
        <input
          type='email'
          className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none placeholder:text-gray-600'
          placeholder='Email'
        />
      </div>

      {/* Services & Time - Stack on mobile */}
      <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 mb-6'>
        <select
          defaultValue=''
          className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none text-gray-600'>
          <option value='' disabled className='text-gray-400'>
            Select Services
          </option>
          <option value='Braids'>Braids</option>
          <option value='Twists'>Twists</option>
          <option value='Cornrows'>Cornrows</option>
          <option value='Locs'>Locs</option>
          <option value='Other'>Other</option>
        </select>
        <input
          type='time'
          className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none border-none text-gray-600'
        />
      </div>

      {/* Submit Button */}
      <div className='flex justify-center mt-6 md:mt-8'>
        <Link
          href='#'
          className='border-2 border-[#a10550] text-[#a10550] font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-[#a10550] hover:text-white transition-colors duration-300 text-sm md:text-base'>
          Book Now
        </Link>
      </div>
    </form>
  );
};

export default Form;
