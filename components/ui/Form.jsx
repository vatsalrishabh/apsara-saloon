'use client';

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPackages,
  selectSelectedService,
  setSelectedService,
} from '../../redux/package/packagesSlice';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '../Component.css';
import { useEffect } from 'react';
import axios from 'axios';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Phone must be a valid 10-digit Indian number'),
  email: z.string().email('Invalid email address'),
  date: z.string().nonempty('Please select a date'),
  time: z
    .string()
    .refine(
      (value) => {
        const [hour] = value.split(':').map(Number);
        return hour >= 9 && hour <= 19;
      },
      { message: 'Time must be between 09:00 and 19:00' }
    ),
  serviceId: z.string().nonempty('Please select a service'),
  serviceName: z.string().nonempty('Service name is required'),
  servicePrice: z.string().nonempty('Service price is required'),
});

const Form = () => {
  const dispatch = useDispatch();
  const packages = useSelector(selectPackages);
  const selectedService = useSelector(selectSelectedService);
 const selectedDate = useSelector((state) => new Date(state.date.date));
console.log(selectedDate)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      serviceId: selectedService?.id?.toString() || '',
      serviceName: selectedService?.title || '',
      servicePrice: selectedService?.price?.toString() || '',
    },
  });


  function formatDateToLocalISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}


useEffect(() => {
  if (selectedDate) {
    const formattedDate = formatDateToLocalISO(selectedDate);
    setValue('date', formattedDate);
  }
}, [selectedDate, setValue]);





  useEffect(() => {
    const userDetail = JSON.parse(localStorage.getItem('userDetails'));
    if (userDetail) {
      setValue('name', userDetail.name || '');
      setValue('phone', userDetail.mobile || '');
      setValue('email', userDetail.email || '');
    }
  }, [setValue]);

  const handleServiceChange = (e) => {
    const selectedId = Number(e.target.value);
    const service = packages.find((p) => p.id === selectedId);
    if (service) {
      dispatch(setSelectedService(service));
      setValue('serviceId', selectedId.toString());
      setValue('serviceName', service.title);
      setValue('servicePrice', service.price.toString());
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/bookings', data);
      console.log('Booking successful:', response.data);
      alert('Booking successful!');
    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white p-6 md:p-8 lg:p-12 rounded-lg w-full max-w-2xl mx-auto'
      id='bookingSection'
    >
      {/* Name & Phone */}
      <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 mb-4'>
        <div className='flex flex-col'>
          <input
            type='text'
            placeholder='Name'
            {...register('name')}
            className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none placeholder:text-gray-600'
          />
          {errors.name && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
        </div>
        <div className='flex flex-col'>
          <input
            type='tel'
            placeholder='Phone'
            {...register('phone')}
            className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none placeholder:text-gray-600'
          />
          {errors.phone && <p className='text-red-600 text-sm'>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div className='mb-4 flex flex-col'>
        <input
          type='email'
          placeholder='Email'
          {...register('email')}
          className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none placeholder:text-gray-600'
        />
        {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
      </div>

      {/* Date */}
      <div className='mb-4 flex flex-col'>
        <input
          type='date'
          {...register('date')}
          className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none text-gray-600'
        />
        {errors.date && <p className='text-red-600 text-sm'>{errors.date.message}</p>}
      </div>

      {/* Services & Time */}
      <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-3 mb-6'>
        <div className='flex flex-col'>
          <select
            {...register('serviceId')}
            value={selectedService?.id?.toString() || ''}
            onChange={handleServiceChange}
            className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none text-gray-600'
          >
            <option value='' disabled>Select a Service</option>
            {packages.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {pkg.title} ({pkg.price} ₹)
              </option>
            ))}
          </select>
          {errors.serviceId && <p className='text-red-600 text-sm'>{errors.serviceId.message}</p>}
        </div>

        <div className='flex flex-col'>
          <input
            type='time'
            {...register('time')}
            min='09:00'
            max='19:00'
            className='bg-[#f48cb79c] p-2 md:p-3 rounded w-full outline-none text-gray-600'
          />
          {errors.time && <p className='text-red-600 text-sm'>{errors.time.message}</p>}
        </div>
      </div>

      {/* Hidden Inputs for serviceName and servicePrice */}
      <input type="hidden" {...register('serviceName')} />
      <input type="hidden" {...register('servicePrice')} />

      {/* Submit Button */}
      <div className='flex justify-center mt-6 md:mt-8'>
        <button
          type='submit'
          className='border-2 border-[#a10550] text-[#a10550] font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg hover:bg-[#a10550] hover:text-white transition-colors duration-300 text-sm md:text-base'
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default Form;
