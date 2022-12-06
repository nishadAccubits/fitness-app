import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ placeHolder }) => {
  return (
    <div className='relative rounded-2xl mt-3'>
      <input
        type='text'
        placeholder={placeHolder}
        className='bg-gray-900 text-gray-400 placeholder:text-gray-600 w-full p-3 pl-14 rounded-2xl outline-none focus:ring-gray-400 focus:ring-1'
      />
      <div className='absolute top-1/2 transform left-0 cursor-pointer'>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='absolute -translate-y-1/2 pr-3 pl-6 text-gray-600'
        />
      </div>
    </div>
  );
};

export default SearchBar;
