import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const StyleList = ({ styles }) => {
  return (
    <>
      <div className='listing group relative h-8 bg-primary flex items-center rounded-r-full '>
        <span className='listing2 bg-[#f48cb8] rounded-r-full h-full w-[20%] flex items-center justify-start'>
          <FontAwesomeIcon
            icon={faRightLong}
            className='arrow pr-1 absolute left-0  transition-all duration-[0.5s] group-hover:left-[38px]'
          />
        </span>
        <Link href='#'>
          <p className='text-xs md:text-sm  text-white px-2 py-4'>{styles}</p>
        </Link>
      </div>
    </>
  );
};

export default StyleList;
