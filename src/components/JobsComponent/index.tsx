import React from 'react';
import {JobListItem, List} from '../../components';

const JobsComponent = ({ jobs }) => {

  const renderItem = ({item}) => (
    <JobListItem
      title={item.title}
      cities={item.cities}
      countries={item.countries}
      commitment={item.commitment.title}
      remote={item.remotes}
      onPress={() => {}}
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
