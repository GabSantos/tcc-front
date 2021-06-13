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

const EsqueciSenha: React.FC = () => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <Text>Insira o email para a recuperação de senha</Text>
        <Form>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Button
            onPress={() => {
              console.log('deu');
            }}
          >
            Entrar
          </Button>
        </Form>

        <TextContainer>
          <CadButton>
            <Text style={{ color: '#3741FF' }}>Cancelar</Text>
          </CadButton>
        </TextContainer>
      </Container>
    </ScrollView>
  );
};

export default EsqueciSenha;
