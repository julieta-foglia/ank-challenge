import React from 'react';
import { ItemWrapper, Title, Subtitle } from './styled';
import { isNonEmptyArray } from '@apollo/client/utilities';

const JobListItem = ({title, cities, countries, commitment, remote, onPress}) => {
  const cityNames = isNonEmptyArray(cities) ? cities.map(({ name }) => name).join(', ') : '-';
  const countryNames = isNonEmptyArray(countries) ? countries.map(({ name }) => name).join(', ') : '-';


  return (
  <ItemWrapper onPress={onPress}>
    <Title>{title}</Title>
    <Subtitle>City: {cityNames}</Subtitle>
    <Subtitle>Country: {countryNames}</Subtitle>
    <Subtitle>Commitment: {commitment}</Subtitle>
    <Subtitle>Remote: {isNonEmptyArray(remote) ? 'Yes' : 'No'}</Subtitle>
  </ItemWrapper>
);}

export default JobListItem;
