import React, { useEffect } from 'react';

import Layout from './layout';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/discoverPage/SearchResult';
import RecentSearches from '../components/discoverPage/RecentSearches';
import { ProgressLoader, progressLoaderFunction } from '../components/general';

const Discover = () => {
  useEffect(() => {
    progressLoaderFunction();
  });

  return (
    <>
      <ProgressLoader />

      <Layout>
        <SearchBar placeHolder='Articles, Exercises, Diets' />
        <RecentSearches />
        <SearchResult />
      </Layout>
    </>
  );
};

export default Discover;
