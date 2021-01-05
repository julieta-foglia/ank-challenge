import React from 'react';
import {JobsList} from './styled';
import {ListItem} from '../../components';

const JobCard = ({ jobs }) => {

  const renderItem = ({item}) => (
    <ListItem
      title={item.title}
      subtitle={item.commitment.title}
      logo={item.logoUrl}
      onPress={() => {}}
    />
    );

  return (
    <JobsList
      data={jobs}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default JobCard;
