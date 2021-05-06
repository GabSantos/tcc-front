import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(244, 244, 244, 0.75);
  border: 2px solid #3741ff;
  box-shadow: 0px 4px 8px rgba(26, 26, 29, 0.08);
  border-radius: 8px;
  margin: 12px 0;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #2e2e33;
  font-size: 18px;
  font-family: 'MontserratRegular';
  ::placeholder {
    font-size: 18px;
    font-family: 'MontserratRegular';
  }
`;
