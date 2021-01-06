import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Wrapper, Title} from './styled';

const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <Wrapper onPress={() => navigation.navigate('Faved Jobs')}>
        <Title>
            Favs
        </Title>
    </Wrapper>
  );
};

export default HeaderRight;
