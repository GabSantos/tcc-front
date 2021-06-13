import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  background: rgba(69, 106, 255, 0.1);

  border-radius: 8px;
  margin: 12px 0;
  flex-direction: row;
  align-items: center;
`;

export const OutContainer = styled.View`
  width: 100%;
  margin-top: 12px;
`;

export const TextInput = styled.TextInput`
  color: #2e2e33;
  font-size: 18px;
  font-family: 'MontserratRegular';
  ::placeholder {
    font-size: 18px;
    font-family: 'MontserratRegular';
  }
`;

export const Label = styled.Text`
  font-size: 20px;
  font-family: 'MontserratMedium';
`;
