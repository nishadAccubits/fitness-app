import React, { useEffect } from 'react';

import { ProgressLoader, progressLoaderFunction } from '../components/general';
import Dates from '../components/homePage/Dates';
import ExercisesContainer from '../components/homePage/ExercisesContainer';
import Goals from '../components/homePage/Goals';
import Layout from './layout';

const Home = () => {
  useEffect(() => {
    progressLoaderFunction();
  });

  return (
    <>
      <ProgressLoader />

      <Layout>
        <Dates />
        <ExercisesContainer />
        <Goals />
      </Layout>
    </>
  );
};

export default Home;
