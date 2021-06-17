import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
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

export const LogoText = styled.Text`
  font-size: 52px;
  font-family: 'Pacifico';
  color: #f4f4f4;
  text-align: center;
  width: 100%;
  margin: 48px 0;

  text-shadow: 2px 4px 8px rgba(26, 26, 29, 0.22);
`;

export const Text = styled.Text`
  font-size: 14px;
  margin: 2px;
  font-family: 'MontserratMedium';
  letter-spacing: -0.5px;
`;

export const CadButton = styled.TouchableOpacity``;

export const TextContainer = styled.View`
  flex: 1;
  margin-top: 86px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SubText = styled.Text`
  font-size: 24px;
  font-family: 'MontserratMedium';
  width: 300px;
  margin-bottom: 22px;
  text-align: center;
  color: rgba(26, 26, 29, 1);

  text-shadow: 2px 4px 8px rgba(26, 26, 29, 0.22);
`;

export const Modal = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(26, 25, 25, 0.4);
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.View`
  height: 400px;
  width: 300px;
  background-color: #f4f4f4;
  border-radius: 25px;
  padding: 25px;
  justify-content: space-around;
`;

export const ModalText = styled.Text`
  font-size: 24px;
  font-family: 'MontserratMedium';
  text-align: center;
  color: rgba(26, 26, 29, 1);
`;

export const Icon = styled(Feather)``;

export const Exit = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  left: 25px;
`;
