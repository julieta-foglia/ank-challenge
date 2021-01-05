import styled from 'styled-components/native';

export const ItemWrapper = styled.TouchableOpacity`
    background-color: #F8A285;
    padding: 20px;
    margin-vertical: 8;
    margin-horizontal: 16;
    border-radius: 10;
`;

export const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 8;
`;

export const Title = styled.Text`
  font-size: 22;
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  font-size: 16;
`;

export const LogoImage = styled.Image`
    width: 30;
    height: 30;
    margin-right: 8;
`;