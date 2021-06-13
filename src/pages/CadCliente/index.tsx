import React, { useState } from 'react';

import { Platform, ScrollView, View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import { Container, Form, Title } from './styles';

const CadCliente: React.FC = () => {
  // date picker
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const aux = date.toISOString().slice(0, 10).split('-');
    setData(`${aux[2]}/${aux[1]}/${aux[0]}`);
  };

  const showMode = () => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode();
  };

  // date picker fm
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Container>
        <View>
          <TouchableOpacity>
            <Text style={{ color: '#3741FF' }}>X</Text>
          </TouchableOpacity>
        </View>
        <Title>Dados pessoais</Title>
        <Form>
          <InputFicha name="nome" label="Nome" />
          <InputFicha name="email" label="E-mail" />
          <InputFicha
            name="residencial"
            label="Telefone"
            placeholder="Residencial..."
          />
          <InputFicha name="comercial" placeholder="Comercial..." />
          <InputFicha name="celular" placeholder="Celular..." />
          <InputFicha
            name="endereco"
            label="Endereço"
            placeholder="Rua, n°..."
          />
          <InputFicha name="bairro" placeholder="Bairro..." />
          <InputFicha name="cidade" placeholder="Cidade..." />
          <InputFicha name="estado" placeholder="Estado..." />
          <InputFicha name="cep" placeholder="CEP..." />
          <InputFicha name="profissao" label="Profissão" />
          <InputFicha name="estadoCivil" label="Estado Civil" />

          <DatePicker
            label="Data de nacimento :"
            icon="calendar"
            onPress={showDatepicker}
          >
            {data}
          </DatePicker>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}

          <Button
            onPress={() => {
              console.log('deu');
            }}
          >
            Cadastrar
          </Button>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default CadCliente;
