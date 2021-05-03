import React from 'react';

import { Container, Logo, LogoText, LogoContainer, BgCircle } from './styles';

import Circulo1 from '../../assets/circulo1.png';
import Circulo2 from '../../assets/circulo2.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo source={Circulo1} />
        <LogoText>Ficha Facial Digital</LogoText>
      </LogoContainer>
      <BgCircle source={Circulo2} />
    </Container>
  );
};

export default SignIn;
