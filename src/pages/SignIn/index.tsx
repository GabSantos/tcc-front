import React, { useState } from 'react';

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
import api from '../../services/api';

const SignIn: React.FC = props => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignIn = () => {
    api
      .get('/user/login', {
        params: {
          email,
          senha,
        },
      })
      .then(resp => {
        props.navigation.navigate('ListFichas', { token: resp.data.token });
      })
      .catch(e => console.log(e));
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <Form>
          <Input
            name="email"
            icon="mail"
            placeholder="E-mail"
            onChangeText={setEmail}
            value={email}
          />
          <Input
            name="password"
            icon="lock"
            placeholder="Senha"
            onChangeText={setSenha}
            value={senha}
            secureTextEntry
          />
          <Button onPress={handleSignIn}>Entrar</Button>
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
