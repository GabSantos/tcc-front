import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const DatePicker = styled(RectButton)`
  background-color: #3741ff;
  height: 60px;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 7px rgba(26, 26, 29, 0.12);
  border-radius: 8px;
  margin: 12px 0;
`;

export const Title = styled.Text`
  font-family: 'MontserratMedium';
  font-size: 30px;
  margin: 56px 0;
`;

export const Icon = styled(Feather)``;

export const Exit = styled(TouchableOpacity)`
  top: 24px;
  position: absolute;
  left: 24px;
`;
