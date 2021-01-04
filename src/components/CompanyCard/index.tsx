import React from 'react';
import {CompaniesList} from './styled';
import {ListItem} from '../../components';

const CompanyCard = ({companies}) => {
  const renderItem = ({item}) => (
    <ListItem
      title={item.name}
      subtitle={item.websiteUrl}
      logo={item.logoUrl}
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
