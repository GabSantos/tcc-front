import React, { useState } from 'react';

import { ScrollView } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

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
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const data = {
    nome,
    email,
    senha,
  };

  const handleSignUp = () => {
    api
      .post('/user', data)
      .then(resp => props.navigation.navigate('SignIn'))
      .catch(e => console.log(e));
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ flex: 1 }}
    >
      <Container source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <Form>
          <Input
            name="name"
            icon="user"
            placeholder="Nome"
            onChangeText={setNome}
            value={nome}
          />
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
          <Button onPress={handleSignUp}>Cadastrar</Button>
        </Form>
        <TextContainer>
          <Text style={{ color: '#2E2E33' }}>Já possui uma conta?</Text>
          <CadButton onPress={() => props.navigation.navigate('SignIn')}>
            <Text style={{ color: '#3741FF' }}>Entre aqui</Text>
          </CadButton>
        </TextContainer>
      </Container>
    </ScrollView>
  );
};

export default SignUp;
