import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled(RectButton)`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  background: rgba(69, 106, 255, 0.1);

  border-radius: 8px;
  margin: 12px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: 'MontserratRegular';
  color: #5e5e62;
`;

export const Icon = styled(Feather)``;

export const Label = styled.Text`
  font-size: 20px;
  font-family: 'MontserratMedium';
`;

export const OutContainer = styled.View`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 24px;
`;
