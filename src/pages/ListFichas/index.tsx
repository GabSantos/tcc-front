import React from 'react';

import { ScrollView, Text } from 'react-native';

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

const ListFichas: React.FC = props => {
  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          {/* uma ficha */}
          <Card
            onPress={() => {
              props.navigation.navigate('Ficha');
            }}
          >
            <CardTextContainer>
              <Nome>Gabriel Araujo Gomes dos Santos</Nome>
              <Queixa>Queixas principais</Queixa>
              <Data>Data ultima edição</Data>
            </CardTextContainer>
            <CardImage style={{ resizeMode: 'contain' }} source={rosto} />
          </Card>

          {/* uma ficha */}
          <Card
            onPress={() => {
              props.navigation.navigate('Ficha');
            }}
          >
            <CardTextContainer>
              <Nome>Gabriel Araujo Gomes dos Santos</Nome>
              <Queixa>Queixas principais</Queixa>
              <Data>Data ultima edição</Data>
            </CardTextContainer>
            <CardImage style={{ resizeMode: 'contain' }} source={rosto} />
          </Card>

          {/* uma ficha */}
          <Card
            onPress={() => {
              props.navigation.navigate('Ficha');
            }}
          >
            <CardTextContainer>
              <Nome>Gabriel Araujo Gomes dos Santos</Nome>
              <Queixa>Queixas principais</Queixa>
              <Data>Data ultima edição</Data>
            </CardTextContainer>
            <CardImage style={{ resizeMode: 'contain' }} source={rosto} />
          </Card>

          {/* uma ficha */}
          <Card
            onPress={() => {
              props.navigation.navigate('Ficha');
            }}
          >
            <CardTextContainer>
              <Nome>Gabriel Araujo Gomes dos Santos</Nome>
              <Queixa>Queixas principais</Queixa>
              <Data>Data ultima edição</Data>
            </CardTextContainer>
            <CardImage style={{ resizeMode: 'contain' }} source={rosto} />
          </Card>

          {/* uma ficha */}
          <Card
            onPress={() => {
              props.navigation.navigate('Ficha');
            }}
          >
            <CardTextContainer>
              <Nome>Gabriel Araujo Gomes dos Santos</Nome>
              <Queixa>Queixas principais</Queixa>
              <Data>Data ultima edição</Data>
            </CardTextContainer>
            <CardImage style={{ resizeMode: 'contain' }} source={rosto} />
          </Card>

          {/* uma ficha */}
          <Card
            onPress={() => {
              props.navigation.navigate('Ficha');
            }}
          >
            <CardTextContainer>
              <Nome>Gabriel Araujo Gomes dos Santos</Nome>
              <Queixa>Queixas principais</Queixa>
              <Data>Data ultima edição</Data>
            </CardTextContainer>
            <CardImage style={{ resizeMode: 'contain' }} source={rosto} />
          </Card>

          {/* fim fichas */}
        </Container>
      </ScrollView>
      <Footer>
        <FotButton
          onPress={() => {
            props.navigation.navigate('EditUsuario');
          }}
        >
          <FotText>Perfil</FotText>
        </FotButton>
        <FotButton
          onPress={() => {
            props.navigation.navigate('CadCliente');
          }}
        >
          <FotText>Novo cliente</FotText>
        </FotButton>
        <FotButton
          onPress={() => {
            props.navigation.navigate('CadFicha');
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
