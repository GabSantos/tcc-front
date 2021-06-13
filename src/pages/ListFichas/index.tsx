import React from 'react';

import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Footer } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          {/* uma ficha */}
          <TouchableOpacity>
            <View style={{ margin: 15, width: '100%', flexDirection: 'row' }}>
              <View>
                <Text>Nome da pessoa</Text>
                <Text>Queixas principais</Text>
                <Text>Data ultima edição</Text>
              </View>
              <View>
                <Text>Imagem rosto</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* uma ficha */}
          <TouchableOpacity>
            <View style={{ margin: 15, width: '100%', flexDirection: 'row' }}>
              <View>
                <Text>Nome da pessoa</Text>
                <Text>Queixas principais</Text>
                <Text>Data ultima edição</Text>
              </View>
              <View>
                <Text>Imagem rosto</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* uma ficha */}
          <TouchableOpacity>
            <View style={{ margin: 15, width: '100%', flexDirection: 'row' }}>
              <View>
                <Text>Nome da pessoa</Text>
                <Text>Queixas principais</Text>
                <Text>Data ultima edição</Text>
              </View>
              <View>
                <Text>Imagem rosto</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* fim fichas */}
        </Container>
      </ScrollView>
      <Footer>
        <TouchableOpacity>
          <Text>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Novo cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Nova ficha</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sair</Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default SignIn;
