import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
`;
export const LogoContainer = styled.View`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
`;
export const LogoText = styled.Text`
  font-size: 52px;
  font-family: 'Pacifico';
  color: #f4f4f4;
  text-align: center;

  text-shadow: 2px 4px 8px rgba(26, 26, 29, 0.22);
`;
export const Logo = styled.Image`
  position: absolute;
  left: -18%;
  top: -14%;
`;

export const BgCircle = styled.Image`
  height: 244px;
  width: 244px;
  position: absolute;
  right: -35%;
  bottom: 4%;
`;
