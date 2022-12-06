import React from 'react';
import { recentSearches } from '../../data/discover';

const RecentSearches = () => {
  return (
    <div className='flex flex-wrap gap-2 my-4'>
      {recentSearches.map((text, index) => (
        <div
          key={index}
          className='bg-gray-800/70 text-center cursor-pointer flex-1 py-1 px-4 rounded-2xl text-gray-200'
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default RecentSearches;
