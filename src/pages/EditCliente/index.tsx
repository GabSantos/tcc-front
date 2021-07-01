import React, { useState, useEffect } from 'react';

import { Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import { Container, Exit, Form, Icon, Title } from './styles';
import api from '../../services/api';

const EditCliente: React.FC = props => {
  // #region  date picker
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const aux = date.toISOString().slice(0, 10);
    setData(aux);
  };

  const showMode = () => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode();
  };

  // #endregion date picker fm

  const { token, fichaId, cliente } = props.route.params;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [foneResidencial, setFoneResidencial] = useState('');
  const [foneComercial, setFoneComercial] = useState('');
  const [celular, setCelular] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCEP] = useState('');
  const [profissao, setProfissao] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');

  useEffect(() => {
    api
      .get(`client/${cliente}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(resp => {
        setNome(resp.data.nome);
        setFoneResidencial(resp.data.fone_residencial || '');
        setFoneComercial(resp.data.fone_comercial || '');
        setCelular(resp.data.celular || '');
        setEmail(resp.data.email || '');
        setEndereco(resp.data.endereco || '');
        setBairro(resp.data.bairro || '');
        setCidade(resp.data.cidade || '');
        setEstado(resp.data.estado || '');
        setCEP(resp.data.cep || '');
        setProfissao(resp.data.profissao);
        setEstadoCivil(resp.data.estado_civil);
        setData(resp.data.data_nascimento);
      })
      .catch(e => console.log(e));
  }, []);

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
        <Title>Dados pessoais</Title>
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
            value={foneResidencial}
            onChangeText={setFoneResidencial}
            name="residencial"
            label="Telefone"
            placeholder="Residencial..."
          />
          <InputFicha
            value={foneComercial}
            onChangeText={setFoneComercial}
            name="comercial"
            placeholder="Comercial..."
          />
          <InputFicha
            value={celular}
            onChangeText={setCelular}
            name="celular"
            placeholder="Celular..."
          />
          <InputFicha
            value={endereco}
            onChangeText={setEndereco}
            name="endereco"
            label="Endereço"
            placeholder="Rua, n°..."
          />
          <InputFicha
            value={bairro}
            onChangeText={setBairro}
            name="bairro"
            placeholder="Bairro..."
          />
          <InputFicha
            value={cidade}
            onChangeText={setCidade}
            name="cidade"
            placeholder="Cidade..."
          />
          <InputFicha
            value={estado}
            onChangeText={setEstado}
            name="estado"
            placeholder="Estado..."
          />
          <InputFicha
            value={cep}
            onChangeText={setCEP}
            name="cep"
            placeholder="CEP..."
          />
          <InputFicha
            value={profissao}
            onChangeText={setProfissao}
            name="profissao"
            label="Profissão"
          />
          <InputFicha
            value={estadoCivil}
            onChangeText={setEstadoCivil}
            name="estadoCivil"
            label="Estado Civil"
          />

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
              const cli = {
                nome,
                email,
                foneResidencial,
                foneComercial,
                celular,
                endereco,
                bairro,
                cidade,
                estado,
                cep,
                profissao,
                estadoCivil,
                dataNascimento: data.slice(0, 10),
                ativo: 'S',
              };
              api
                .put(`client/${cliente}`, JSON.stringify(cli), {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                  },
                })
                .then(resp => {
                  console.log(resp.status);
                  props.navigation.goBack();
                })
                .catch(e => console.log(e));
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
