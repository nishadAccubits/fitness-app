import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { PrimaryButton } from '../general';
import { Scaleloader } from '../../utilities/loaders';

const TrainersList = () => {
  const [trainersData, setTrainersData] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setTrainersData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {trainersData ? (
        <div className='gap-3 mt-6 grid grid-cols-1 md:grid-cols-2'>
          {trainersData.map((data, index) => (
            <TrainerCard key={index} {...data} />
          ))}
        </div>
      ) : (
        <Scaleloader />
      )}
    </>
  );
};

export default TrainersList;

const TrainerCard = ({ image, title, rating, id }) => {
  return (
    <div className='bg-gray-900 rounded-2xl relative'>
      <div className='flex items-center gap-3 flex-col 350px:flex-row '>
        <img
          src={image}
          alt=''
          className='w-full 350px:w-[30%] h-44 rounded-tl-2xl'
        />
        <div className='flex-1 px-5 py-7 space-y-4'>
          <h1 className='text-gray-200 text-2xl font-semibold'>
            {title.split(' ')?.slice(0, 2)?.join(' ')}
          </h1>
          <p className='text-gray-600'>
            General fitness trainer <br /> 6 years of experinece
          </p>
        </div>
      </div>
      <div className='bg-gray-800 p-5 rounded-b-2xl'>
        <div className='flex items-center justify-between flex-col 400px:flex-row '>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faStar} className='text-gray-300' />
            <p className='text-gray-300'>Fitness, Wellness</p>
          </div>
          <p className='text-gray-300'>
            <span className='font-bold text-2xl text-white'>
              ${rating.rate}/
            </span>{' '}
            Session
          </p>
        </div>
        <PrimaryButton text='Book a Session' />
      </div>

      {id === 1 && (
        <p
          style={{
            background: 'linear-gradient(to right, #c37dff 0%, #b867ff 100%)',
          }}
          className='absolute top-0 right-3 transform -translate-y-1/2 text-gray-800 rounded-md px-4 py-1 text-sm font-bold'
        >
          Recommended for you
        </p>
      )}
    </div>
  );
};
