import React, { useState, useEffect } from 'react';

import { Platform, ScrollView } from 'react-native';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';

import { Container, Form, Icon, Title, Exit } from './styles';
import api from '../../services/api';

const EditUsuario: React.FC = props => {
  const { token } = props.route.params;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senhas, setSenha] = useState('');

  useEffect(() => {
    api
      .get('user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(resp => {
        console.log('effetc');
        setNome(resp.data.nome);
        setEmail(resp.data.email);
      })
      .catch(e => console.log(e));
  }, []);

  const handleSubmit = () => {
    if (senhas === '') {
      const data = {
        nome,
        email,
      };

      api
        .put('user', JSON.stringify(data), {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(resp => {
          props.navigation.goBack();
        })
        .catch(e => console.log(e));
    } else {
      const data = {
        nome,
        email,
        senha: senhas,
      };

      api
        .put('user', JSON.stringify(data), {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(resp => {
          props.navigation.goBack();
        })
        .catch(e => console.log(e));
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <Exit
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Icon name="arrow-left" size={24} />
        </Exit>
        <Title>Editar dados</Title>
        <Form>
          <InputFicha
            value={nome}
            onChangeText={setNome}
            name="nome"
            label="Nome"
          />
          <InputFicha
            value={email}
            onChangeText={setEmail}
            name="email"
            label="E-mail"
          />
          <InputFicha
            value={senhas}
            onChangeText={setSenha}
            name="senha"
            label="Senha"
            secureTextEntry
          />

          <Button onPress={handleSubmit}>Salvar</Button>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default EditUsuario;
