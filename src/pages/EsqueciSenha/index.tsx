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
  SubText,
  Modal,
  ModalContainer,
  ModalText,
  Exit,
  Icon,
} from './styles';
import api from '../../services/api';

const EsqueciSenha: React.FC = props => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    'Sua nova senha foi enviada por email',
  );
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);

  const handleSenha = () => {
    api
      .patch('user/changePassword', {
        email,
      })
      .then(resp => {
        setModal(true);
      })
      .catch(e => {
        setMessage('Usuário não encontrado');
        setError(true);
        setModal(true);
        console.log(e);
      });
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container source={Login}>
        <LogoText>Ficha Facial Digital</LogoText>
        <SubText>Insira o email para a recuperação de senha</SubText>
        <Form>
          <Input
            value={email}
            onChangeText={setEmail}
            name="email"
            icon="mail"
            placeholder="E-mail"
          />
          <Button onPress={handleSenha}>Recuperar</Button>
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
        {modal && (
          <Modal>
            <ModalContainer>
              <Exit
                onPress={() => {
                  setModal(false);
                }}
              >
                <Icon name="x" size={24} />
              </Exit>
              <ModalText>{message}</ModalText>
              {!error && (
                <Button
                  onPress={() => {
                    props.navigation.navigate('SignIn');
                  }}
                >
                  Fazer Login
                </Button>
              )}
            </ModalContainer>
          </Modal>
        )}
      </Container>
    </ScrollView>
  );
};

export default EsqueciSenha;
