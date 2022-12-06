import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TitleContainer } from '../general';
import { goalsData } from '../../data/home';

const Goals = () => {
  return (
    <>
      <TitleContainer title='Goals' />
      <div className='grid grid-cols-1 350px:grid-cols-2 gap-2'>
        {goalsData.map((data, index) => (
          <GoalCard key={index} {...data} />
        ))}
      </div>
    </>
  );
};

export default Goals;

const GoalCard = ({ icon, value, maximum, name }) => {
  return (
    <div className='bg-gray-900 rounded-2xl p-5 flex items-center justify-center flex-col gap-4'>
      <div className='border-4 border-white rounded-full w-20 h-20 flex items-center justify-center'>
        <FontAwesomeIcon icon={icon} size='lg' />
      </div>

      <p className='text-lg'>
        <span className='text-white'>{value}</span>
        <span className='text-gray-600'> / {maximum}</span>
      </p>
      <p className='text-gray-600'>
        <span className='text-gray-400'>{name.split(' ')[0]} </span>
        {name.indexOf(' ') !== -1 && name.substring(name.indexOf(' ') + 1)}
      </p>
    </div>
  );
};
