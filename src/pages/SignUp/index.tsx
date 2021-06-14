import React from 'react';

import { ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import Login from '../../assets/Login.png';

import {
  Container,
  LogoText,
  Form,
  Text,
  CadButton,
  TextContainer,
} from './styles';

const SignUp: React.FC = props => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1 }}
    >
      <Container source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <Form>
          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Input name="password" icon="lock" placeholder="Confirmar senha" />
          <Button
            onPress={() => {
              props.navigation.navigate('SignIn');
            }}
          >
            Entrar
          </Button>
        </Form>
        <TextContainer>
          <Text style={{ color: '#2E2E33' }}>Já possui uma conta?</Text>
          <CadButton
            onPress={() => {
              props.navigation.navigate('SignIn');
            }}
          >
            <Text style={{ color: '#3741FF' }}>Entre aqui</Text>
          </CadButton>
        </TextContainer>
      </Container>
    </ScrollView>
  );
};

export default SignUp;
