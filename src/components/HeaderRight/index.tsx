import React from 'react';
import { Wrapper, Title} from './styled';
import { useNavigation } from '@react-navigation/native';

const HeaderRight = ({ title, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <Wrapper onPress={() => navigation.navigate(navigateTo)}>
        <Title>
            {title}
        </Title>
    </Wrapper>
  );
};

export default HeaderRight;
