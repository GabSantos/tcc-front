import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Login from '../../assets/Login.png';

import {
  Container,
  ImageBg,
  LogoText,
  Form,
  Text,
  CadButton,
  TextContainer,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ImageBg source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <Form>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button
            onPress={() => {
              console.log('deu');
            }}
          >
            Entrar
          </Button>
        </Form>
        <TextContainer>
          <Text style={{ color: '#2E2E33' }}>Não possui uma conta?</Text>
          <CadButton>
            <Text style={{ color: '#3741FF' }}>Cadastre-se aqui</Text>
          </CadButton>
        </TextContainer>
      </ImageBg>
    </Container>
  );
};

export default SignIn;
