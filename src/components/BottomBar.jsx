import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BottomBarLinks } from '../data/globalData';

const BottomBar = () => {
  const { pathname } = useLocation();

  return (
    <div className='p-5 fixed bottom-0 left-0 bg-gray-900 w-full flex'>
      {BottomBarLinks.map(({ icon, name, link }, index) => (
        <Link
          to={link}
          className='flex-1 flex items-center justify-center flex-col text-xs 350px:text-base'
          key={index}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`${link === pathname ? 'text-white' : 'text-gray-600'}`}
          />
          <p
            className={`${link === pathname ? 'text-white' : 'text-gray-600'}`}
          >
            {name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BottomBar;
