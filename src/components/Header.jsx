import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleStop } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title }) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <p className='text-xl'>
          {title ? (
            <span className='font-bold'>{title}</span>
          ) : (
            <>
              <span className='text-gray-400'>Hi, </span>{' '}
              <span className='font-bold'>Pranav</span>
            </>
          )}
        </p>
        <div className='flex justify-center gap-4 items-center'>
          <FontAwesomeIcon icon={faBell} />
          <div className='flex justify-center gap-2 items-center bg-gray-800 rounded-md p-2'>
            <FontAwesomeIcon icon={faCircleStop} />

            <p>245</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
