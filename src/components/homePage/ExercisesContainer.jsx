import React, { useEffect, useState } from 'react';

import { Scaleloader } from '../../utilities/loaders';
import { TitleContainer } from '../general';

const ExercisesContainer = () => {
  const [exercisesData, setexercisesData] = useState(null);

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setexercisesData(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mb-6'>
      <TitleContainer title='Today' />
      <div className='space-y-4'>
        {exercisesData ? (
          exercisesData
            .slice(0, 10)
            .map((data, index) => <ExerciseCard key={index} {...data} />)
        ) : (
          <Scaleloader />
        )}
      </div>
    </div>
  );
};

export default ExercisesContainer;

const ExerciseCard = ({ image, title, rating, id }) => {
  return (
    <div className='bg-gray-800 flex gap-2 rounded-xl shadow-xl'>
      <div className='relative'>
        <div>
          <img
            src={image}
            className='w-28 h-28 rounded-l-xl'
            alt='fitnessImage'
          />
        </div>

        <p className='text-white absolute bottom-1 left-0 w-full text-center'>
          {rating.rate} mins
        </p>
      </div>
      <div className='flex flex-col justify-between p-2'>
        <h1 className='font-bold text-lg linear-color'>
          {title.split(' ').slice(0, 2).join(' ')}
        </h1>
        <p className='text-gray-600 text-sm'>{id} day challenge</p>
      </div>
    </div>
  );
};
