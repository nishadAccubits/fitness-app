import React, { useEffect } from 'react';

import { ProgressLoader, progressLoaderFunction } from '../components/general';
import SearchBar from '../components/SearchBar';
import FriendsList from '../components/spacesPage/FriendsList';
import Layout from './layout';

const Spaces = () => {
  useEffect(() => {
    progressLoaderFunction();
  });

  return (
    <>
      <ProgressLoader />

      <Layout>
        <SearchBar placeHolder='Search' />
        <FriendsList />
      </Layout>
    </>
  );
};

export default Spaces;
