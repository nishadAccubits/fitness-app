import React, { useEffect } from 'react';

import { ProgressLoader, progressLoaderFunction } from '../components/general';
import Layout from './layout';

const Routines = () => {
  useEffect(() => {
    progressLoaderFunction();
  });

  return (
    <>
      <ProgressLoader />

      <Layout>
        <h1 className='text-center linear-color text-2xl font-bold mt-5'>
          My Routines Page
        </h1>
      </Layout>
    </>
  );
};

export default Routines;
