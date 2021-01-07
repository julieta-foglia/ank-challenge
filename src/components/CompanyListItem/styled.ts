import styled from 'styled-components/native';

export const ItemWrapper = styled.TouchableOpacity`
    background-color: #dcdcdc;
    padding: 20px;
    margin-top: 16px;
    margin-horizontal: 16px;
    border-radius: 10px;
`;

export const TitleWrapper = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: 600;
`;

export const Subtitle = styled.Text`
    font-size: 16px;
`;

export const LogoImage = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 8px;
    border-radius: 10px;
`;
