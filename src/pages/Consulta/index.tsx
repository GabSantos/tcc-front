import React, { useRef, useState } from 'react';

// import Signature from 'react-native-canvas-signature';
import Signature, { SignatureViewRef } from 'react-native-signature-canvas';
import * as FileSystem from 'expo-file-system';
import FormData from 'form-data';

import InputFicha from '../../components/InputFicha';

import { Container } from './styles';

import image from '../../assets/frontal.png';
import api from '../../services/api';

const Consulta: React.FC = props => {
  const { token, fichaId } = props.route.params;
  const ref = useRef<SignatureViewRef>(null);
  const [signature, setSign] = useState(null);
  const [tratamentos, setTratamentos] = useState('');
  const [orientacoes, setOrientacoes] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [esteticista, setEsteticista] = useState('');

  const style = `
  .m-signature-pad {
    height: 250px;
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
      <InputFicha
        value={tratamentos}
        onChangeText={setTratamentos}
        name="Tratamentos"
        placeholder="Tratamentos"
      />
      <InputFicha
        value={observacoes}
        onChangeText={setObservacoes}
        name="Observacoes"
        placeholder="Observações"
      />
      <InputFicha
        value={orientacoes}
        onChangeText={setOrientacoes}
        name="Orientacoes"
        placeholder="Orientações"
      />
      <InputFicha
        value={esteticista}
        onChangeText={setEsteticista}
        name="Esteticista"
        placeholder="Esteticista"
      />
      <Signature
        webStyle={style}
        ref={ref}
        onOK={(sig: any) => {
          const formData = new FormData();
          const path = `${FileSystem.cacheDirectory}sign.png`;
          FileSystem.writeAsStringAsync(
            path,
            sig.replace('data:image/png;base64,', ''),
            { encoding: FileSystem.EncodingType.Base64 },
          )
            .then(res => {
              FileSystem.getInfoAsync(path, { size: true, md5: true }).then(
                file => {
                  // console.log(file);
                  formData.append('assinaturaCliente', {
                    uri: file.uri,
                    type: 'image/png',
                    name: 'assiantura.png',
                  });
                  formData.append('tratamentos', tratamentos);
                  formData.append('observacoes', observacoes);
                  formData.append('orientacoes', orientacoes);
                  formData.append('esteticista', esteticista);

                  api
                    .post(`consultation/record/${fichaId}`, formData, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                      },
                    })
                    .then(resp => {
                      props.navigation.navigate('ListFichas', { token });
                    })
                    .catch(e => console.error(e));
                },
              );
            })
            .catch(err => {
              console.log('err', err);
            });
        }}
        onClear={() => console.log('clear')}
        imageType="image/jpeg"
      />
    </Container>
  );
};

export default Consulta;
