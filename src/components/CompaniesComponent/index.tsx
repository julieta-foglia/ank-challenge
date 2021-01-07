import React from 'react';
import {Title} from './styled';
import {List, CompanyListItem} from '../../components';
import {useNavigation} from '@react-navigation/native';
import { CompanyItem } from 'types/companyItem';

interface CompanyComponentProps {
  companies: CompanyItem[];
}


const CompaniesComponent = ({companies}: CompanyComponentProps) => {
  const navigation = useNavigation();

  const renderItem = (item: CompanyItem) => (
    <CompanyListItem
      title={item.name}
      subtitle={item.websiteUrl}
      logo={item.logoUrl}
      onPress={() =>
        navigation.navigate('Jobs', {
          jobs: item.jobs,
          company: item.name
        })
      }
    />
  );

  return (
    <>
      <Title>Companies</Title>
      <List data={companies} renderItem={renderItem} />
    </>
  );
};

export default CompaniesComponent;
