import '../Component.css';
import Link from 'next/link';

const Contact = ({}) => {
  return (
    <section
      id='contact'
      className='flex justify-center w-full  bg-secondary pt-14 pb-28'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-[70%] '>
        <div className='pb-12 md:pb-0'>
          <h3 className='text-[22px] md:text-2xl text-primary pb-2'>
            How can we Help?
          </h3>
          <ul className='flex flex-col gap-1.5 text-[14px]'>
            <li>
              <Link href='#'>Services</Link>
            </li>
            <li>
              <Link href='#'>Contact Us</Link>
            </li>
            <li>
              <Link href='#'>FAQ</Link>
            </li>
            <li>
              <Link href='#'>Our Brand</Link>
            </li>
            <li>
              <Link href='#'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className='contact2 '>
          <h3 className='text-[22px] md:text-2xl text-primary pb-2'>
            keep in touch with Glam
          </h3>
          <p className='text-[14px]'>
            Join the Glam newsletter and be first to hear about news and offers{' '}
          </p>
          <p className='text-[22px] md:text-2xl pt-4'>Email Address</p>
          <span className='flex flex-col md:flex-row'>
            <div className='line w-100 md:w-[60%] border-b-0 md:border-b-2 border-primary mr-4 bg-transparent '>
              <input
                type='email'
                placeholder='Enter your email address'
                className='w-full h-full outline-none  text-[18px] bg-gray-100 border-none pl-2 py-3'
              />
            </div>
            <Link
              href='#'
              className='border-2 text-center border-primary text-primary py-3 px-4 mt-4 md:mt-0'>
              Subscribe
            </Link>
          </span>
          <div className='w-full'>
            <input type='checkbox' className='mt-5 ' />
            <label htmlFor='checkbox' className='pl-2 text-[14px]'>
              By submitting your email, you agree to receive advertising emails
              from Glam. Please review our Privacy Policy, which includes our
              Financial Incentive Notice.
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
