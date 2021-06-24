import React, { useState, useEffect } from 'react';

import { ScrollView, Platform, View } from 'react-native';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';

import { Container, Exit, Form, Icon, Title } from './styles';
// import api from '../../services/api';

const Foto: React.FC = props => {
  // const { token, formData } = props.route.params;

  const [hasPermission, setHasPermission] = useState(null || false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const bool = status === 'granted';
      setHasPermission(bool);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Title>No access to camera</Title>;
  }
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

        <Form />
      </Container>
    </ScrollView>
  );
};

export default Foto;
