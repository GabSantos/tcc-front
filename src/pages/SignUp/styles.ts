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
  width: 300px;
  margin: 20px 0;

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
  bottom: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
