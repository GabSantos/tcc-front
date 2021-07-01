import React, { useEffect, useState } from 'react';

import { FlatList, ScrollView } from 'react-native';

import api from '../../services/api';

import {
  Card,
  CardImage,
  CardTextContainer,
  Container,
  Data,
  Footer,
  FotButton,
  FotText,
  Nome,
  Queixa,
} from './styles';

import rosto from '../../assets/frontal.png';

interface Ficha {
  id: number;
  data: Date;
  imagemRosto: string;
  consultas: [
    {
      tratamentos: string;
      observacoes: string;
      orientacoes: string;
    },
  ];
  cliente: string;
}

const ListFichas: React.FC = props => {
  const { token } = props.route.params;
  const [fichas, setFichas] = useState([]);
  const [ready, setReady] = useState(false);

  const getFichas = () => {
    setReady(false);
    api
      .get('record', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(resp => {
        setFichas(resp.data);
        setReady(true);
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    getFichas();
  }, []);

  const render = (item: any) => {
    if (item.cliente !== null) {
      if (item.consultas.length > 0) {
        return (
          <Card
            key={item.id}
            onPress={() => {
              props.navigation.navigate('Ficha', {
                token,
                fichaId: item.id,
                imageUrl: item.imagem_rosto,
              });
            }}
          >
            <CardTextContainer>
              <Nome>{`${item.cliente.nome}`}</Nome>
              <Queixa>{`${item.consultas[0].tratamentos}`}</Queixa>

              <Data>{`${item.data.slice(0, -19)}`}</Data>
            </CardTextContainer>
            <CardImage
              style={{ resizeMode: 'contain' }}
              source={{
                uri: item.imagem_rosto,
              }}
            />
          </Card>
        );
      }
      return (
        <Card
          key={item.id}
          onPress={() => {
            props.navigation.navigate('Ficha', {
              token,
              fichaId: item.id,
              imageUrl: item.imagem_rosto,
            });
          }}
        >
          <CardTextContainer>
            <Nome>{`${item.cliente.nome}`}</Nome>
            <Queixa>Realize a primeira consulta</Queixa>

            <Data>{`${item.data.slice(0, -19)}`}</Data>
          </CardTextContainer>
          <CardImage
            style={{ resizeMode: 'contain' }}
            source={{
              uri: item.imagem_rosto,
            }}
          />
        </Card>
      );
    }
  };

  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          {/* uma ficha */}

          {/* <FlatList
            keyExtractor={item => item.id}
            data={fichas}
            renderItem={render}
          /> */}

          {ready && fichas.map(render)}

          {/* fim fichas */}
        </Container>
      </ScrollView>
      <Footer>
        <FotButton
          onPress={() => {
            props.navigation.navigate('EditUsuario', { token });
          }}
        >
          <FotText>Perfil</FotText>
        </FotButton>
        <FotButton
          onPress={() => {
            props.navigation.navigate('CadCliente', { token });
          }}
        >
          <FotText>Novo cliente</FotText>
        </FotButton>
        <FotButton
          onPress={() => {
            props.navigation.navigate('CadFicha', { token });
          }}
        >
          <FotText>Nova ficha</FotText>
        </FotButton>
        <FotButton
          onPress={() => {
            props.navigation.navigate('SignIn');
          }}
        >
          <FotText>Sair</FotText>
        </FotButton>
      </Footer>
    </Container>
  );
};

export default ListFichas;
