import React, { useRef } from 'react';

import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignatureScreen from 'react-native-signature-canvas';
import { Container, Footer } from './styles';

const Consulta: React.FC = () => {
  const handleSignature = (signature: any) => {
    console.log(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleClear = () => {
    console.log('clear success!');
  };

  return (
    <Container>
      <SignatureScreen
        onOK={handleSignature}
        onEmpty={handleEmpty}
        onClear={handleClear}
      />
    </Container>
  );
};

export default Consulta;
