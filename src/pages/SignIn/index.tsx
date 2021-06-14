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

const SignIn: React.FC = props => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <Form>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Button
            onPress={() => {
              props.navigation.navigate('ListFichas');
            }}
          >
            Entrar
          </Button>
        </Form>
        <CadButton
          onPress={() => {
            props.navigation.navigate('EsqueciSenha');
          }}
        >
          <Text style={{ color: '#3741FF' }}>Esqueci minha senha</Text>
        </CadButton>
        <TextContainer>
          <Text style={{ color: '#2E2E33' }}>Não possui uma conta?</Text>
          <CadButton
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}
          >
            <Text style={{ color: '#3741FF' }}>Cadastre-se aqui</Text>
          </CadButton>
        </TextContainer>
      </Container>
    </ScrollView>
  );
};

export default SignIn;
