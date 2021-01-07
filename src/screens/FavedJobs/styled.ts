import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex: 1;
  margin-vertical: 8px;
  justify-content: center;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  background: #f5774c;
  color: white;
  font-size: 10px;
  border-radius: 10px;
  margin-vertical: 32px;
  margin-horizontal: 16px;
  padding-vertical: 16px;
  align-items: center;
`;

export const RemoveButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 600;
  align-self: center;
`;
