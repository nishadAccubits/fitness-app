import React, { useState } from 'react';
import { datesData } from '../../data/home';

const Dates = () => {
  const [selectedDate, setSelectedDate] = useState('30');

  return (
    <div className='bg-gray-900 grid grid-cols-7 rounded-lg my-9'>
      {datesData.map(({ date, day }, index) => (
        <div
          key={index}
          className={` flex flex-col items-center p-2 cursor-pointer hover:bg-gray-700 rounded-lg ${
            selectedDate === date ? 'bg-gray-800 text-white' : 'text-gray-600'
          }`}
          onClick={() => setSelectedDate(date)}
        >
          <span
            className={`font-bold ${
              selectedDate === date ? 'text-purple-500' : ''
            }`}
          >
            {date}
          </span>
          <span className='text-xs'>{day}</span>
        </div>
      ))}
    </div>
  );
};

export default Dates;
