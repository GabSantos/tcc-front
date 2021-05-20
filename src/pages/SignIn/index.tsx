import React from 'react';

import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
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

const SignIn: React.FC = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
      style={{ flex: 1 }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container source={Login}>
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
          <CadButton
            onPress={() => {
              console.log('deu');
            }}
          >
            <Text style={{ color: '#3741FF' }}>Esqueci minha senha</Text>
          </CadButton>
          <TextContainer>
            <Text style={{ color: '#2E2E33' }}>Não possui uma conta?</Text>
            <CadButton>
              <Text style={{ color: '#3741FF' }}>Cadastre-se aqui</Text>
            </CadButton>
          </TextContainer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
