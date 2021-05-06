import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: #3741ff;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 7px rgba(26, 26, 29, 0.12);
  border-radius: 8px;
  margin: 12px 0;
`;
export const ButtonText = styled.Text`
  font-family: 'MontserratRegular';
  font-size: 18px;
  color: #f4f4f4;
`;
