import React from 'react';
import {ItemWrapper, TitleWrapper, Title, Subtitle, LogoImage} from './styled';
import {DEFAULT_LOGO_URL} from '../../config/constants/urls';

interface CompanyListItemProps {
  title: string;
  subtitle: string;
  logo: string;
  onPress: () => void;
}

const CompanyListItem: React.FC<CompanyListItemProps> = ({ title, subtitle, logo, onPress}: CompanyListItemProps) => (
  <ItemWrapper onPress={onPress}>
    <TitleWrapper>
      <LogoImage
        source={{
          uri: logo || DEFAULT_LOGO_URL,
        }}
      />
      <Title>{title}</Title>
    </TitleWrapper>
    <Subtitle>{subtitle}</Subtitle>
  </ItemWrapper>
);

export default CompanyListItem;
