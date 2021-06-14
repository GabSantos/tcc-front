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
  SubText,
} from './styles';

const EsqueciSenha: React.FC = props => {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <SubText>Insira o email para a recuperação de senha</SubText>
        <Form>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Button
            onPress={() => {
              props.navigation.navigate('SignIn');
            }}
          >
            Recuperar
          </Button>
        </Form>

        <TextContainer>
          <CadButton
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Text style={{ color: '#3741FF' }}>Cancelar</Text>
          </CadButton>
        </TextContainer>
      </Container>
    </ScrollView>
  );
};

export default EsqueciSenha;
