import React from 'react';
import {Wrapper, Title} from './styled';
import {useNavigation} from '@react-navigation/native';

interface HeaderRightProps {
  title: string;
  navigateTo: string;
}

const HeaderRight: React.FC<HeaderRightProps> = ({title, navigateTo}: HeaderRightProps) => {
  const navigation = useNavigation();

  return (
    <Wrapper onPress={() => navigation.navigate(navigateTo)}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default HeaderRight;
