import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {JobListItem, List} from '../../components';

const JobsComponent = ({ jobs }) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <JobListItem
      title={item.title}
      cities={item.cities}
      countries={item.countries}
      commitment={item.commitment.title}
      remote={item.remotes}
      onPress={() => navigation.navigate('Job Application', {
        job: item.title,
      })}
    />
    );

  return (
    <List
      data={jobs}
      renderItem={renderItem}
    />
  );
};

export default JobsComponent;
