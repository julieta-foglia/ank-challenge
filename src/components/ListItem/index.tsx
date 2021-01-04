import React from 'react';
import {ItemWrapper, TitleWrapper, Title, Subtitle, LogoImage} from './styled';
const DEFAULT_LOGO_URL = 'https://reactnative.dev/img/tiny_logo.png';

const ListItem = ({title, subtitle, logo}) => (
  <ItemWrapper>
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

export default ListItem;
