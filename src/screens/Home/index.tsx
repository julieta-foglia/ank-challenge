import React from 'react';
import { ScrollView } from 'react-native';
import {gql, useQuery} from '@apollo/client';
import {CompanyCard} from '../../components';
import COMPANIES_QUERY from '../../config/constants/companiesQuery';

const Home = () => {
  const companiesQueries = useQuery(COMPANIES_QUERY);
  
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <CompanyCard companies={companiesQueries.loading ?  [] : companiesQueries.data.companies} />
    </ScrollView>
  );
};

export default Home;
