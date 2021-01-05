import React from 'react';
import {JobListItem, List} from '../../components';

const JobsComponent = ({ jobs }) => {

  const renderItem = ({item}) => (
    <JobListItem
      title={item.title}
      subtitle={item.commitment.title}
      logo={item.logoUrl}
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
