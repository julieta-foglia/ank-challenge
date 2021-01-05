import React from 'react';
import {ItemWrapper, TitleWrapper, Title, Subtitle, LogoImage} from './styled';
import DEFAULT_LOGO_URL from '../../config/constants/urls';

const JobListItem = ({title, subtitle, logo, onPress}) => (
  <ItemWrapper onPress={onPress}>
    <TitleWrapper>
      <LogoImage
        source={{
          uri: logo ? logo : DEFAULT_LOGO_URL,
        }}
      />
      <Title>{title}</Title>
    </TitleWrapper>
    <Subtitle>{subtitle}</Subtitle>
  </ItemWrapper>
);

export default JobListItem;
