import React from 'react';
import {DataList} from './styled';

const List = ({data, renderItem}) => {

  return (
    <DataList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;
