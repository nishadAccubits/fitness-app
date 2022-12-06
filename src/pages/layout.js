import React from 'react';
import { useLocation } from 'react-router-dom';

import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import { headers } from '../data/globalData';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div className='bg-black/90 text-white p-4 min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <Header title={headers.find(({ path }) => path === pathname)?.title} />
        {children}
        <div className='mb-20' />
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
