import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { tabs } from '../../data/consult';

const Tabs = () => {
  const [selectedTab, setselectedTab] = useState('Trainers');

  return (
    <div className='w-full flex rounded-lg bg-gray-900/75 mt-7 gap-1'>
      {tabs.map(({ icon, name }, index) => (
        <div
          className={`font-medium flex-1 rounded-lg flex items-center justify-center flex-col gap-1 hover:bg-gray-700/80 p-3 400px:p-5 cursor-pointer ${
            name === selectedTab ? 'bg-gray-700 text-white ' : 'text-gray-500'
          }`}
          key={index}
          onClick={() => setselectedTab(name)}
        >
          <FontAwesomeIcon
            icon={icon}
            size='2x'
            className={` ${
              name === selectedTab ? 'text-purple-500' : 'text-gray-500'
            }`}
          />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
