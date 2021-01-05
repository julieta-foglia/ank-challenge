import React from 'react';
import {CompaniesList} from './styled';
import {ListItem} from '../../components';
import { useNavigation } from '@react-navigation/native';

const CompanyCard = ({companies}) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <ListItem
      title={item.name}
      subtitle={item.websiteUrl}
      logo={item.logoUrl}
      onPress={() => navigation.navigate('Jobs', {
        jobs: item.jobs,
      })}
    />
    );

  return (
    <CompaniesList
      data={companies}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CompanyCard;
