import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Form = styled.View`
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  width: 300px;
`;

export const Title = styled.Text`
  font-family: 'MontserratMedium';
  font-size: 30px;
  width: 300px;
  margin: 30px 0;
`;

export const Area = styled.View`
  width: 100%;
  height: 45px;
  border: solid 2px #3741ff;
  border-right-width: 0;
  border-left-width: 0;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

export const AreaText = styled.Text`
  text-align: center;
  width: 100%;
  font-family: 'MontserratMedium';
`;

export const RadioView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RadioLabel = styled.Text`
  font-family: 'MontserratMedium';
`;

export const RadioTitle = styled.Text`
  font-size: 20px;
  font-family: 'MontserratMedium';
  width: 100%;
`;

export const Icon = styled(Feather)``;

export const Exit = styled(TouchableOpacity)`
  margin-top: 24px;
  margin-right: 80%;
`;

export const CardImage = styled.Image`
  height: 300px;
  width: 100%;
`;
