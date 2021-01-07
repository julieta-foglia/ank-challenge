import styled from 'styled-components/native';

export const FormWrapper = styled.View`
    width: 100%;
`;

export const Input = styled.TextInput`
    border: 1px;
    border-color: gray;
    border-radius: 10px;
    height: 40px;
    margin-vertical: 8px;
    padding: 8px;
`;

export const ErrorText = styled.Text`
    color: red;
`;

export const ButtonWrapper = styled.TouchableOpacity`
    background: #f5774c;
    color: white;
    font-size: 10px;
    border-radius: 10px;
    margin-horizontal: 8px;
    margin-top: 8px;
    padding-vertical: 16px;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 600;
`;
