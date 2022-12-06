import React, { useEffect } from 'react';

import Layout from './layout';
import Tabs from '../components/Consult/Tabs';
import SearchBar from '../components/SearchBar';
import TrainersList from '../components/Consult/TrainersList';
import { ProgressLoader, progressLoaderFunction } from '../components/general';

const Consult = () => {
  useEffect(() => {
    progressLoaderFunction();
  });

  return (
    <>
      <ProgressLoader />

      <Layout>
        <SearchBar placeHolder='Search' />
        <Tabs />
        <TrainersList />
      </Layout>
    </>
  );
};

export default Consult;
