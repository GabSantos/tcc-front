import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export const Footer = styled.View`
  height: 75px;
  width: 100%;
  border: solid 0 rgba(69, 106, 255, 0.7);
  border-top-width: 2px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const FotButton = styled(TouchableOpacity)`
  height: 55px;
  align-items: center;
  justify-content: center;
  width: 55px;
`;

export const FotText = styled.Text`
  text-align: center;
  font-family: 'MontserratRegular';
`;

export const Card = styled(TouchableOpacity)`
  height: 100px;
  width: 300px;
  margin-top: 40px;
  flex-direction: row;
  border-radius: 5px;
  border: solid 2px rgba(69, 106, 255, 1);
  padding: 12px;
  justify-content: space-between;
`;

export const CardTextContainer = styled.View`
  height: 100%;
  width: 200px;
`;

export const CardImage = styled.Image`
  height: 76px;
  width: 76px;
`;

export const Nome = styled.Text`
  font-size: 14px;
  font-family: 'MontserratMedium';
`;

export const Queixa = styled.Text`
  font-size: 10px;
  font-family: 'MontserratRegular';
`;

export const Data = styled.Text`
  font-size: 10px;
  font-family: 'MontserratRegular';
  bottom: 0;
  position: absolute;
`;
