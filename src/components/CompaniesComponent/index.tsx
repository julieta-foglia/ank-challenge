import React from 'react';
import {List, CompanyListItem} from '../../components';
import { useNavigation } from '@react-navigation/native';

const CompaniesComponent = ({companies}) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <CompanyListItem
      title={item.name}
      subtitle={item.websiteUrl}
      logo={item.logoUrl}
      onPress={() => navigation.navigate('Jobs', {
        jobs: item.jobs,
      })}
    />
    );

  return (
    <List
      data={companies}
      renderItem={renderItem}
    />
  );
};

export default CompaniesComponent;
