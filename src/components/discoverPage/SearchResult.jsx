import React, { useEffect, useState } from 'react';

import { Scaleloader } from '../../utilities/loaders';
import { TitleContainer } from '../general';

const SearchResult = () => {
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
    <>
      <TitleContainer title='Exercises' />

      {exercisesData ? (
        <div className='grid grid-cols-1 350px:grid-cols-2 md:grid-cols-4 gap-4'>
          {exercisesData.slice(0, 12).map((data, index) => (
            <ExerciseCard key={index} {...data} />
          ))}
        </div>
      ) : (
        <Scaleloader />
      )}
    </>
  );
};

export default SearchResult;

const ExerciseCard = ({ image, title }) => {
  return (
    <div className='relative rounded-2xl'>
      <div>
        <img
          src={image}
          alt=''
          className='rounded-2xl w-full min-h-[250px] max-h-[250px]'
        />
      </div>
      <h6 className='absolute bottom-0 p-5 font-bold text-white text-xl'>
        {title.split(' ').slice(0, 4).join(' ')}
      </h6>
    </div>
  );
};
