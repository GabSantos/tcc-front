import React, { useState } from 'react';

import { ScrollView, View, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import {
  Area,
  AreaText,
  Container,
  Exit,
  Form,
  Icon,
  RadioLabel,
  RadioTitle,
  RadioView,
  Title,
} from './styles';

const Ficha: React.FC = props => {
  const [ultimaConsulta, setUltimaConsulta] = useState(new Date());
  const [cicloMenstrualNormal, setCicloMenstrualNormal] = useState('S');
  const [primeiraMenstruacao, setPrimeiraMenstruacao] = useState(new Date());
  const [ultimaMenstruacao, setUltimaMenstruacao] = useState(new Date());
  const [sop, setSop] = useState('N');
  const [climaterio, setClimaterio] = useState('N');
  const [menopausa, setMenopausa] = useState('N');
  const [reposicaoHormonal, setReposicaoHormonal] = useState('N');
  const [gestante, setGestante] = useState('N');
  const [nroGravidez, setNroGravidez] = useState(0);
  const [nroFilhos, setNroFilhos] = useState(0);
  const [seios, setSeios] = useState('S');
  const [contraceptivos, setContraceptivos] = useState('N');
  const [hirsutismo, setHirsutismo] = useState('N');
  const [hirsutismoRepentino, setHirsutismoRepentino] = useState('N');
  const [diabetes, setDiabetes] = useState('N');
  const [tireoide, setTireoide] = useState('N');
  const [marcaPasso, setMarcaPasso] = useState('N');
  const [hipotensao, setHipotensao] = useState('N');
  const [hipertensao, setHipertensao] = useState('N');
  const [tratamentoDermatologico, setTratamentoDermatologico] = useState('N');
  const [tratamentoAnterior, setTratamentoAnterior] = useState('N');
  const [ansiedade, setAnsiedade] = useState('N');
  const [impaciencia, setImpaciencia] = useState('N');
  const [depressao, setDepressao] = useState('N');
  const [choqueEmocional, setChoqueEmocional] = useState('N');
  const [antidepressivo, setAntidepressivo] = useState('N');
  const [sono, setSono] = useState('bom');
  const [remedioDormir, setRemedioDormir] = useState('N');
  const [sensibilidadeDor, setSensibilidadeDor] = useState('nenhuma');
  const [estresse, setEstresse] = useState('normal');
  const [checkups, setCheckups] = useState('N');
  const [dores, setDores] = useState('N');
  const [epilepsia, setEpilepsia] = useState('N');
  const [antecedentesOncologicos, setAntecedentesOncologicos] = useState('N');
  const [retencaoHidrica, setRetencaoHidrica] = useState('N');
  const [rosacea, setRosacea] = useState('N');
  const [lentesDeContato, setLentesDeContato] = useState('N');
  const [tonturas, setTonturas] = useState('N');
  const [problemasRenais, setProblemasRenais] = useState('N');
  const [lupus, setLupus] = useState('N');
  const [queloides, setQueloides] = useState('N');
  const [implanteDentario, setImplanteDentario] = useState('N');
  const [faltaDeAr, setFaltaDeAr] = useState('N');
  const [usoDeCorticoides, setUsoDeCorticoides] = useState('N');
  const [psoriase, setPsoriase] = useState('N');
  const [dermatiteSeborreica, setDermatiteSeborreica] = useState('N');
  const [placasMetalicasNaFace, setPlacasMetalicasNaFace] = useState('N');
  const [atividadesFisicas, setAtividadesFisicas] = useState('nenhuma');
  const [fumante, setFumante] = useState('N');
  const [funcaoIntestinal, setFuncaoIntestinal] = useState('Regular');

  // #region  date picker Ultima Consulta
  const [ultimaConsultaText, setUltimaConsultaText] = useState('');
  const [showUltimaConsulta, setShowUltimaConsulta] = useState(false);

  const onUltimaConsulta = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || ultimaConsulta;
    setShowUltimaConsulta(Platform.OS === 'ios');
    setUltimaConsulta(currentDate);

    const aux = ultimaConsulta.toISOString().slice(0, 10).split('-');
    setUltimaConsultaText(`${aux[2]}/${aux[1]}/${aux[0]}`);
  };

  const showUltimaConsultaPicker = () => {
    setShowUltimaConsulta(true);
  };
  // #endregion date picker fm

  // #region  date picker Primeira Menstruaçaõ
  const [primeiraMenstruacaoText, setPrimeiraMenstruacaoText] = useState('');
  const [showPrimeiraMenstruacao, setShowPrimeiraMenstruacao] = useState(false);

  const onPrimeiraMenstruacao = (
    event: any,
    selectedDate?: Date | undefined,
  ) => {
    const currentDate = selectedDate || primeiraMenstruacao;
    setShowPrimeiraMenstruacao(Platform.OS === 'ios');
    setPrimeiraMenstruacao(currentDate);

    const aux = primeiraMenstruacao.toISOString().slice(0, 10).split('-');
    setPrimeiraMenstruacaoText(`${aux[2]}/${aux[1]}/${aux[0]}`);
  };

  const showPrimeiraMenstruacaoPicker = () => {
    setShowPrimeiraMenstruacao(true);
  };
  // #endregion date picker fm

  // #region  date picker Ultima Menstruaçaõ
  const [ultimaMenstruacaoText, setUltimaMenstruacaoText] = useState('');
  const [showUltimaMenstruacao, setShowUltimaMenstruacao] = useState(false);

  const onUltimaMenstruacao = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || ultimaMenstruacao;
    setShowUltimaMenstruacao(Platform.OS === 'ios');
    setUltimaMenstruacao(currentDate);

    const aux = ultimaMenstruacao.toISOString().slice(0, 10).split('-');
    setUltimaMenstruacaoText(`${aux[2]}/${aux[1]}/${aux[0]}`);
  };

  const showUltimaMenstruacaoPicker = () => {
    setShowUltimaMenstruacao(true);
  };
  // #endregion date picker fm

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
        <Title>Dados gerais de saúde e hábitos de vida</Title>
        <Form>
          <InputFicha name="queixa" label="Queixa principal" />
          {/* Ginecológico */}
          <>
            <Area>
              <AreaText>Ginecológico</AreaText>
            </Area>
            <DatePicker
              label="Ultima consulta :"
              icon="calendar"
              onPress={showUltimaConsultaPicker}
            >
              {ultimaConsultaText}
            </DatePicker>
            {showUltimaConsulta && (
              <DateTimePicker
                testID="dateTimePicker"
                value={ultimaConsulta}
                mode="date"
                display="default"
                onChange={onUltimaConsulta}
              />
            )}

            <RadioTitle>Ciclo menstrual normal :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={cicloMenstrualNormal === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setCicloMenstrualNormal('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={cicloMenstrualNormal === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setCicloMenstrualNormal('N')}
              />
            </RadioView>
            <InputFicha
              name="ciclo_menstrual_alteracoes"
              placeholder="Alterações"
            />
            <DatePicker
              label="Primeira Menstruação :"
              icon="calendar"
              onPress={showPrimeiraMenstruacaoPicker}
            >
              {primeiraMenstruacaoText}
            </DatePicker>
            {showPrimeiraMenstruacao && (
              <DateTimePicker
                testID="dateTimePicker"
                value={primeiraMenstruacao}
                mode="date"
                display="default"
                onChange={onPrimeiraMenstruacao}
              />
            )}

            <DatePicker
              label="Ultima Menstruação :"
              icon="calendar"
              onPress={showUltimaMenstruacaoPicker}
            >
              {ultimaMenstruacaoText}
            </DatePicker>
            {showUltimaMenstruacao && (
              <DateTimePicker
                testID="dateTimePicker"
                value={ultimaMenstruacao}
                mode="date"
                display="default"
                onChange={onUltimaMenstruacao}
              />
            )}

            <RadioTitle>Sindrome dos ovários policísticos :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={sop === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setSop('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={sop === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setSop('N')}
              />
            </RadioView>

            <RadioTitle>Climaterio :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={climaterio === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setClimaterio('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={climaterio === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setClimaterio('N')}
              />
            </RadioView>

            <RadioTitle>Menopausa :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={menopausa === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setMenopausa('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={menopausa === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setMenopausa('N')}
              />
            </RadioView>

            <RadioTitle>Reposição hormonal :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={reposicaoHormonal === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setReposicaoHormonal('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={reposicaoHormonal === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setReposicaoHormonal('N')}
              />
            </RadioView>

            <RadioTitle>Gestante :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={gestante === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setGestante('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={gestante === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setGestante('N')}
              />
            </RadioView>
            <InputFicha name="meses_gestacao" placeholder="Quantos meses?" />
            <RadioView>
              <RadioLabel>Número de gravidez</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={nroGravidez}
                onValueChange={(itemValue, itemIndex) =>
                  setNroGravidez(itemValue)
                }
              >
                <Picker.Item label="0" value={0} />
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
                <Picker.Item label="6" value={6} />
                <Picker.Item label="7" value={7} />
                <Picker.Item label="8" value={8} />
                <Picker.Item label="9" value={9} />
                <Picker.Item label="10" value={10} />
              </Picker>
            </RadioView>

            <RadioView>
              <RadioLabel>Número de filhos</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={nroFilhos}
                onValueChange={(itemValue, itemIndex) =>
                  setNroFilhos(itemValue)
                }
              >
                <Picker.Item label="0" value={0} />
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
                <Picker.Item label="6" value={6} />
                <Picker.Item label="7" value={7} />
                <Picker.Item label="8" value={8} />
                <Picker.Item label="9" value={9} />
                <Picker.Item label="10" value={10} />
              </Picker>
            </RadioView>

            <InputFicha name="idades_filhos" placeholder="Idades dos filhos" />

            <RadioTitle>Seios normais :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={seios === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setSeios('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={seios === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setSeios('N')}
              />
            </RadioView>
            <InputFicha name="seios_alteracoes" placeholder="Alterações" />

            <RadioTitle>Contraceptivos hormonais :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={contraceptivos === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setContraceptivos('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={contraceptivos === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setContraceptivos('N')}
              />
            </RadioView>
            <InputFicha
              name="contraceptivos_hormonais"
              placeholder="Há quanto tempo?"
            />

            <RadioTitle>Hirsutismo :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={hirsutismo === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setHirsutismo('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={hirsutismo === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setHirsutismo('N')}
              />
            </RadioView>

            <RadioTitle>Repentino?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={hirsutismoRepentino === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setHirsutismoRepentino('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={hirsutismoRepentino === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setHirsutismoRepentino('N')}
              />
            </RadioView>
            <InputFicha
              name="hisurtismo_idade"
              placeholder="Desde que idade?"
            />
          </>

          {/* Endócrino */}
          <>
            <Area>
              <AreaText>Endócrino</AreaText>
            </Area>

            <RadioTitle>Diabetes :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={diabetes === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setDiabetes('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={diabetes === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setDiabetes('N')}
              />
            </RadioView>
            <RadioTitle>Tireoide :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={tireoide === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setTireoide('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={tireoide === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setTireoide('N')}
              />
            </RadioView>
          </>

          {/* Cardíaco */}
          <>
            <Area>
              <AreaText>Cardíaco</AreaText>
            </Area>

            <RadioTitle>Marca Passo :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={marcaPasso === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setMarcaPasso('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={marcaPasso === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setMarcaPasso('N')}
              />
            </RadioView>
            <InputFicha name="cardiaco_observacoes" placeholder="Outros" />
          </>

          {/* Vascular */}
          <>
            <Area>
              <AreaText>Vascular</AreaText>
            </Area>

            <RadioTitle>Hipotensão :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={hipotensao === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setHipotensao('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={hipotensao === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setHipotensao('N')}
              />
            </RadioView>

            <RadioTitle>Hipertensão :</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={hipertensao === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setHipertensao('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={hipertensao === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setHipertensao('N')}
              />
            </RadioView>
          </>

          {/* Alergias */}
          <>
            <Area>
              <AreaText>Alergias</AreaText>
            </Area>
            <InputFicha name="alergias" placeholder="Quais?" />
          </>

          {/* Dermatológico */}
          <>
            <Area>
              <AreaText>Dermatológico</AreaText>
            </Area>
            <RadioTitle>Atualmente trata-se com um dermatologista?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={
                  tratamentoDermatologico === 'S' ? 'checked' : 'unchecked'
                }
                onPress={() => setTratamentoDermatologico('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={
                  tratamentoDermatologico === 'N' ? 'checked' : 'unchecked'
                }
                onPress={() => setTratamentoDermatologico('N')}
              />
            </RadioView>
            <InputFicha
              name="tratamento_dermatologico_justificacao"
              placeholder="Por quê?"
            />
            <InputFicha
              name="tratamento_dermatologico_em_uso"
              placeholder="Tratamento em uso (oral/tópico)"
            />
            <InputFicha
              name="tratamento_dermatologico_em_uso_tempo"
              placeholder="Há quanto tempo?"
            />

            <RadioTitle>Já se tratou anteriormente?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={tratamentoAnterior === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setTratamentoAnterior('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={tratamentoAnterior === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setTratamentoAnterior('N')}
              />
            </RadioView>
            <InputFicha
              name="tratamento_dermatologico_anterior_justificativa"
              placeholder="Por quê?"
            />
            <InputFicha
              name="tratamento_dermatologico_anterior"
              placeholder="Tratamento usado (oral/tópico)"
            />
            <InputFicha
              name="tratamento_dermatologico_anterior_tempo"
              placeholder="Há quanto tempo?"
            />
          </>

          {/* Psicólogicos / Emocionais */}
          <>
            <Area>
              <AreaText>Psicólogicos / Emocionais</AreaText>
            </Area>
            <RadioView>
              <RadioLabel>Ansiedade :</RadioLabel>

              <RadioButton
                value={ansiedade}
                status={ansiedade === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  ansiedade === 'S' ? setAnsiedade('N') : setAnsiedade('S')
                }
              />
            </RadioView>
            {/* <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={ansiedade === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setAnsiedade('N')}
              />
            </RadioView> */}
            <RadioView>
              <RadioLabel>Impaciência :</RadioLabel>
              {/* <RadioLabel>Sim</RadioLabel> */}
              <RadioButton
                value={impaciencia}
                status={impaciencia === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  impaciencia === 'S'
                    ? setImpaciencia('N')
                    : setImpaciencia('S')
                }
              />
            </RadioView>
            {/* <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={impaciencia === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setImpaciencia('N')}
              />
            </RadioView> */}
            <RadioView>
              <RadioLabel>Depressão :</RadioLabel>
              {/* <RadioLabel>Sim</RadioLabel> */}
              <RadioButton
                value={depressao}
                status={depressao === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  depressao === 'S' ? setDepressao('N') : setDepressao('S')
                }
              />
            </RadioView>
            {/*  <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={depressao === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setDepressao('N')}
              />
            </RadioView> */}
            <RadioView>
              <RadioLabel>Choque emocional :</RadioLabel>
              {/* <RadioLabel>Sim</RadioLabel> */}
              <RadioButton
                value={choqueEmocional}
                status={choqueEmocional === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  choqueEmocional === 'S'
                    ? setChoqueEmocional('N')
                    : setChoqueEmocional('S')
                }
              />
            </RadioView>
            {/*  <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={choqueEmocional === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setChoqueEmocional('N')}
              />
            </RadioView> */}

            <RadioTitle>Usa antidepressivos?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={antidepressivo === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setAntidepressivo('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={antidepressivo === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setAntidepressivo('N')}
              />
            </RadioView>
            <InputFicha name="antidepressivos" placeholder="Quais?" />
            <RadioView>
              <RadioLabel>Sono</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={sono}
                onValueChange={(itemValue, itemIndex) => setSono(itemValue)}
              >
                <Picker.Item label="Bom" value="bom" />
                <Picker.Item label="Regular" value="regular" />
                <Picker.Item label="Ruim" value="ruim" />
                <Picker.Item label="Insônia" value="insonia" />
              </Picker>
            </RadioView>
            <RadioTitle>Usa remédios para dormir?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={remedioDormir === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setRemedioDormir('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={remedioDormir === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setRemedioDormir('N')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Sensibilidade a dor :</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={sensibilidadeDor}
                onValueChange={(itemValue, itemIndex) =>
                  setSensibilidadeDor(itemValue)
                }
              >
                <Picker.Item label="Nenhuma" value="nenhuma" />
                <Picker.Item label="Pouca" value="pouca" />
                <Picker.Item label="Média" value="media" />
                <Picker.Item label="Muita" value="muita" />
              </Picker>
            </RadioView>

            <RadioView>
              <RadioLabel>Estresse: </RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={estresse}
                onValueChange={(itemValue, itemIndex) => setEstresse(itemValue)}
              >
                <Picker.Item label="Normal" value="normal" />
                <Picker.Item label="Pouco" value="pouco" />
                <Picker.Item label="Médio" value="medio" />
                <Picker.Item label="Muito" value="muito" />
              </Picker>
            </RadioView>
          </>

          {/* Outras informações */}
          <>
            <Area>
              <AreaText>Outras informações</AreaText>
            </Area>
            <RadioTitle>Faz checkups regularmente?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={checkups === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setCheckups('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={checkups === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setCheckups('N')}
              />
            </RadioView>
            <InputFicha
              name="enfermidades_atuais"
              placeholder="Enfermidades atuais:"
            />
            <InputFicha
              name="enfermidades_anteriores"
              placeholder="Enfermidades anteriores:"
            />

            <RadioTitle>Medicamentos em uso :</RadioTitle>
            <RadioView>
              <RadioLabel>Dores :</RadioLabel>

              <RadioButton
                value={dores}
                status={dores === 'S' ? 'checked' : 'unchecked'}
                onPress={() => (dores === 'S' ? setDores('N') : setDores('S'))}
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Epilepsia :</RadioLabel>

              <RadioButton
                value={epilepsia}
                status={epilepsia === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  epilepsia === 'S' ? setEpilepsia('N') : setEpilepsia('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Antecedentes Oncológicos :</RadioLabel>

              <RadioButton
                value={antecedentesOncologicos}
                status={
                  antecedentesOncologicos === 'S' ? 'checked' : 'unchecked'
                }
                onPress={() =>
                  antecedentesOncologicos === 'S'
                    ? setAntecedentesOncologicos('N')
                    : setAntecedentesOncologicos('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Retenção Hidrica :</RadioLabel>

              <RadioButton
                value={retencaoHidrica}
                status={retencaoHidrica === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  retencaoHidrica === 'S'
                    ? setRetencaoHidrica('N')
                    : setRetencaoHidrica('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Rosácea :</RadioLabel>

              <RadioButton
                value={rosacea}
                status={rosacea === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  rosacea === 'S' ? setRosacea('N') : setRosacea('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Lentes de contato :</RadioLabel>

              <RadioButton
                value={lentesDeContato}
                status={lentesDeContato === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  lentesDeContato === 'S'
                    ? setLentesDeContato('N')
                    : setLentesDeContato('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Tonturas :</RadioLabel>

              <RadioButton
                value={tonturas}
                status={tonturas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  tonturas === 'S' ? setTonturas('N') : setTonturas('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Problemas renais :</RadioLabel>

              <RadioButton
                value={problemasRenais}
                status={problemasRenais === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  problemasRenais === 'S'
                    ? setProblemasRenais('N')
                    : setProblemasRenais('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Lúpus :</RadioLabel>

              <RadioButton
                value={lupus}
                status={lupus === 'S' ? 'checked' : 'unchecked'}
                onPress={() => (lupus === 'S' ? setLupus('N') : setLupus('S'))}
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Queloides :</RadioLabel>

              <RadioButton
                value={queloides}
                status={queloides === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  queloides === 'S' ? setQueloides('N') : setQueloides('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Implante dentario :</RadioLabel>

              <RadioButton
                value={implanteDentario}
                status={implanteDentario === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  implanteDentario === 'S'
                    ? setImplanteDentario('N')
                    : setImplanteDentario('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Falta de ar :</RadioLabel>

              <RadioButton
                value={faltaDeAr}
                status={faltaDeAr === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  faltaDeAr === 'S' ? setFaltaDeAr('N') : setFaltaDeAr('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Uso de corticoides :</RadioLabel>

              <RadioButton
                value={usoDeCorticoides}
                status={usoDeCorticoides === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  usoDeCorticoides === 'S'
                    ? setUsoDeCorticoides('N')
                    : setUsoDeCorticoides('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Psoríase :</RadioLabel>

              <RadioButton
                value={psoriase}
                status={psoriase === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  psoriase === 'S' ? setPsoriase('N') : setPsoriase('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Dermatite seborreica :</RadioLabel>

              <RadioButton
                value={dermatiteSeborreica}
                status={dermatiteSeborreica === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  dermatiteSeborreica === 'S'
                    ? setDermatiteSeborreica('N')
                    : setDermatiteSeborreica('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Placas metalicas na face :</RadioLabel>

              <RadioButton
                value={placasMetalicasNaFace}
                status={placasMetalicasNaFace === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  placasMetalicasNaFace === 'S'
                    ? setPlacasMetalicasNaFace('N')
                    : setPlacasMetalicasNaFace('S')
                }
              />
            </RadioView>
          </>

          {/* Hábitos de vida */}
          <>
            <Area>
              <AreaText>Hábitos de vida</AreaText>
            </Area>

            <RadioView>
              <RadioLabel>Atividades físicas :</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={atividadesFisicas}
                onValueChange={(itemValue, itemIndex) =>
                  setAtividadesFisicas(itemValue)
                }
              >
                <Picker.Item label="Nenhuma" value="nenhuma" />
                <Picker.Item label="Esporádica" value="esporadica" />
                <Picker.Item label="Regular" value="regular" />
                <Picker.Item label="Diária" value="diaria" />
              </Picker>
            </RadioView>
            <InputFicha name="atividades_fisicas" placeholder="Quais?" />
            <InputFicha name="alimentacao" placeholder="Alimentação:" />
            <InputFicha name="agua" placeholder="Água +- copos/dia:" />
            <InputFicha
              name="bebida_alcoolica"
              placeholder="Bebida alcoólica:"
            />

            <RadioTitle>Fumante?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={fumante === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setFumante('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={fumante === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setFumante('N')}
              />
            </RadioView>
            <InputFicha name="fumante_quantidade" placeholder="Quantos/dia" />
            <InputFicha name="fumante_tempo" placeholder="Desde quando?" />
            <InputFicha
              name="fumante_parada"
              placeholder="Parou a quanto tempo?"
            />

            <RadioTitle>Função intestinal :</RadioTitle>
            <RadioView>
              <RadioLabel>Regular</RadioLabel>
              <RadioButton
                value="Regular"
                status={
                  funcaoIntestinal === 'Regular' ? 'checked' : 'unchecked'
                }
                onPress={() => setFuncaoIntestinal('Regular')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Ruim</RadioLabel>
              <RadioButton
                value="Ruim"
                status={funcaoIntestinal === 'Ruim' ? 'checked' : 'unchecked'}
                onPress={() => setFuncaoIntestinal('Ruim')}
              />
            </RadioView>
            <InputFicha name="intestino_obs" placeholder="Observação:" />
          </>

          {/* Informações complementares */}
          <>
            <Area>
              <AreaText>Informações complementares</AreaText>
            </Area>
            <InputFicha name="info_complementar" />
          </>

          {/* Informações e avaliações estéticas */}
          <>
            <Area>
              <AreaText>Informações e avaliações estéticas</AreaText>
            </Area>
          </>

          {/* Cuidados diarios com a pele - Uso de cosméticos */}
          <>
            <Area>
              <AreaText>
                Cuidados diarios com a pele - Uso de cosméticos
              </AreaText>
            </Area>
          </>

          {/* Fototipo segundo a classificação de Fitzpatrick */}
          <>
            <Area>
              <AreaText>
                Fototipo segundo a classificação de Fitzpatrick
              </AreaText>
            </Area>
          </>
          {/* Etnia / Racial */}
          <>
            <Area>
              <AreaText>Etnia / Racial</AreaText>
            </Area>
          </>

          {/* Tipo de pele */}
          <>
            <Area>
              <AreaText>Pele</AreaText>
            </Area>
          </>

          {/* Classificação segundo Glogau */}
          <>
            <Area>
              <AreaText>Classificação segundo Glogau</AreaText>
            </Area>
          </>

          {/* Acne */}
          <>
            <Area>
              <AreaText>Acne</AreaText>
            </Area>
          </>
          {/* AQUIIIIIIIIIIIIIIIIIIIIII */}
          <Button
            onPress={() => {
              props.navigation.navigate('Consulta');
            }}
          >
            Cadastrar
          </Button>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default Ficha;
