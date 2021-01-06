import React from 'react';
import { ScrollView, ActivityIndicator, View } from 'react-native';
import {useQuery} from '@apollo/client';
import {CompaniesComponent} from '../../components';
import { Wrapper } from './styled';
import COMPANIES_QUERY from '../../config/constants/companiesQuery';

const Home = () => {
  const companiesQueries = useQuery(COMPANIES_QUERY);
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Wrapper>
      {companiesQueries.loading?     
        <ActivityIndicator size="small" color="#F5774C"/> :
        <CompaniesComponent companies={companiesQueries.data.companies} />
        }
      </Wrapper>
    </ScrollView>
  );
};

export default Home;
