import React, { useRef, useState } from 'react';

import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import Signature from 'react-native-canvas-signature';
import Signature, { SignatureViewRef } from 'react-native-signature-canvas';

import Button from '../../components/Button';

import { Container, Footer } from './styles';

import image from '../../assets/frontal.png';

const Consulta: React.FC = props => {
  const ref = useRef<SignatureViewRef>(null);
  const [signature, setSign] = useState(null);

  const style = `
  .m-signature-pad {
    height: 600px;
    margin-left: 0px;
    margin-top: 0px;
   }
   .m-signature-pad--body
    canvas {
      background: url(${image});
    }
  `;
  return (
    <Container>
      <Signature
        webStyle={style}
        ref={ref}
        onOK={(sig: any) => {
          setSign(sig);
          props.navigation.navigate('ListFichas');
          console.log('clear');
        }}
        onClear={() => console.log('clear')}
        imageType="image/jpeg"
      />
      {/* <Image
        resizeMode="contain"
        style={{ position: 'absolute' }}
        source={image}
      /> */}
    </Container>
  );
};

export default Consulta;
