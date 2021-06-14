import React, { useState } from 'react';

import { Platform, ScrollView, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import { Container, Form, Icon, Title, Exit } from './styles';

const EditCliente: React.FC = props => {
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
          <InputFicha name="nome" label="Nome" />
          <InputFicha name="email" label="E-mail" />
          <InputFicha name="senha" label="Senha" />

          <Button
            onPress={() => {
              props.navigation.navigate('ListFichas');
            }}
          >
            Salvar
          </Button>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default EditCliente;
