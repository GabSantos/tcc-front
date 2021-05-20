import styled from 'styled-components/native';

import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: rgba(244, 244, 244, 0.75);
  border: 2px solid #3741ff;
  box-shadow: 0px 4px 8px rgba(26, 26, 29, 0.08);
  border-radius: 8px;
  margin: 12px 0;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex-grow: 1;
  color: #2e2e33;
  font-size: 18px;
  font-family: 'MontserratRegular';
  ::placeholder {
    font-size: 18px;
    font-family: 'MontserratRegular';
  }
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
