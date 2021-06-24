import React, { useState, useEffect } from 'react';

import { ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import FormData from 'form-data';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import imagem from '../../assets/frontal.png';

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
import api from '../../services/api';

interface CadastroFicha {
  queixaPrincipal: string;
  ginecologistaUltimaConsulta?: Date;
  cicloMenstrualNormal: string;
  alteracoesCicloMenstrual?: string;
  primeiraMenstruacao?: Date;
  ultimaMenstruacao?: Date;
  sop: string;
  climaterio: string;
  menopausa: string;
  reposicaoHormonal: string;
  gestante: string;
  mesesGestacao?: number;
  quantidadeGravidez: number;
  quantidadeFilhos: number;
  idadesFilhos?: string;
  seiosNormais: string;
  seiosAlteracoes?: string;
  contraceptivosHormonais: string;
  contraceptivosHormonaisTempo?: string;
  hirsutismo: string;
  hirsutismoRepentino?: string;
  hirsutismoIdade?: string;
  diabetes: string;
  tireoide: string;
  marcaPasso: string;
  cardiacoObservacoes?: string;
  hipotensao: string;
  hipertensao: string;
  alergias?: string;
  tratamentoDermatologico: string;
  tratamentoDermatologicoJustificativa?: string;
  tratamentoDermatologicoEmUso?: string;
  tratamentoDermatologicoEmUsoTempo?: string;
  tratamentoDermatologicoAnterior: string;
  tratamentoDermatologicoAnteriorJustificativa?: string;
  tratamentoDermatologicoAnteriorUsado?: string;
  tratamentoDermatologicoAnteriorTempo?: string;
  ansiedade: string;
  impaciencia: string;
  depressao: string;
  choqueEmocional: string;
  usaAntidepressivos: string;
  antidepressivos?: string;
  sonoId: number;
  usaRemediosParaDormir: string;
  sensibilidadeADorId: number;
  estresseId: number;
  checkupsMedicosRegularmente: string;
  enfermidadesAtuais?: string;
  enfermidadesAnteriores?: string;
  medicamentosDores: string;
  medicamentosEpilepsia: string;
  medicamentosAntecedentesOncologicos: string;
  medicamentosRetencaoHidrica: string;
  medicamentosRosacea: string;
  medicamentosLentesDeContato: string;
  medicamentosTonturas: string;
  medicamentosProblemasRenais: string;
  medicamentosLupus: string;
  medicamentosQueloides: string;
  medicamentosImplanteDentario: string;
  medicamentosFaltaDeAr: string;
  medicamentosUsoDeCorticoides: string;
  medicamentosPsoriase: string;
  medicamentosDermatiteSeborreica: string;
  medicamentosPlacasMetalicasFace: string;
  frequenciaAtividadesFisicasId: number;
  atividadesFisicas?: string;
  alimentacao: string;
  aguaQuantidade: string;
  aguaCopos: string;
  etilismo: string;
  fumante: string;
  cigarrosDia?: string;
  fumanteInicio?: string;
  fumanteFim?: string;
  funcaoIntestinalId: number;
  funcaoIntestinalObs?: string;
  informacoesComplementares?: string;
  tratamentosEsteticosAnteriores?: string;
  cirurgiaPlasticaFace?: string;
  cirurgiaPlasticaFaceTempo?: string;
  usoDeCosmeticosLimpeza?: string;
  usoDeCosmeticosEsfoliacao?: string;
  usoDeCosmeticosTonificacao?: string;
  usoDeCosmeticosAcidos?: string;
  usoDeCosmeticosHidratacao?: string;
  usoDeCosmeticosTratamentosEspecificos?: string;
  usoDeCosmeticosFotoprotecao?: string;
  exposicaoSolarId: number;
  usoDeCosmeticosMaquiagem?: string;
  cosmeticosSensibilidade?: string;
  fototipoId: number;
  etniaId: number;
  tipoPeleId: number;
  peleAoTatoId: number;
  peleSensibilidadeId: number;
  peleSensibilidadeObservacao?: string;
  acromias: string;
  hipocromias: string;
  efelides: string;
  melasmas: string;
  lentigos: string;
  melanose: string;
  hipercromiaPosTraumatica: string;
  hipercromiaPosInflamatoria: string;
  xantelasmas: string;
  hiperplasiaSebacea: string;
  cicatrizes: string;
  seborreia: string;
  flacidezMuscular: string;
  comedoesCapilares: string;
  eritemas: string;
  verrugas: string;
  queratosePilarFolicular: string;
  asfitica: string;
  ostiosDilatados: string;
  flacidezTissular: string;
  microcomedoes: string;
  edemas: string;
  nevos: string;
  dermografismo: string;
  talangiectasias: string;
  miliuns: string;
  escoriacoes: string;
  comedoesAbertos: string;
  hematomas: string;
  fotoenvelhecimentoId: number;
  verrugasFrontal?: string;
  verrugasGlabela?: string;
  verrugasOrbicularOlhos?: string;
  verrugasOrbicularLabios?: string;
  verrugasLateralFace?: string;
  verrugasSulcoNasogeniano?: string;
  verrugasPescoco?: string;
  verrugasColo?: string;
  pustulas: string;
  nodulos: string;
  comedoesFechados: string;
  papulas: string;
  acneGrauId?: number;
  acneJuvenilVulgar: string;
  acneTardia: string;
  acneFamilia: string;
  acneInicio?: string;
  acneEvolucao?: string;
  outrasConsideracoes?: string;
  assinaturaCliente: File;
  imagemRosto: File;
  ativo: string;
  clienteId: number;
}

const CadFicha: React.FC = props => {
  const { token, fichaId, cliente } = props.route.params;

  const [queixaPrincipal, setQueixaPrincipal] = useState('');

  const [ultimaConsulta, setUltimaConsulta] = useState(new Date());
  const [cicloMenstrualNormal, setCicloMenstrualNormal] = useState('S');

  const [alteracoesCicloMenstrual, setAlteracoesCicloMenstrual] = useState('');

  const [primeiraMenstruacao, setPrimeiraMenstruacao] = useState(new Date());
  const [ultimaMenstruacao, setUltimaMenstruacao] = useState(new Date());
  const [sop, setSop] = useState('N');
  const [climaterio, setClimaterio] = useState('N');
  const [menopausa, setMenopausa] = useState('N');
  const [reposicaoHormonal, setReposicaoHormonal] = useState('N');
  const [gestante, setGestante] = useState('N');

  const [mesesGestacao, setMesesGestacao] = useState(0); // transformar em int

  const [nroGravidez, setNroGravidez] = useState(0);
  const [nroFilhos, setNroFilhos] = useState(0);

  const [idadeFilhos, setIdadeFilhos] = useState('');

  const [seios, setSeios] = useState('S');

  const [seiosAlteracoes, setSeiosAlteracoes] = useState('');

  const [contraceptivos, setContraceptivos] = useState('N');

  const [contraceptivosTempo, setContraceptivosTempo] = useState('');

  const [hirsutismo, setHirsutismo] = useState('N');
  const [hirsutismoRepentino, setHirsutismoRepentino] = useState('N');

  const [hirsutismoIdade, setHirsutismoIdade] = useState('');

  const [diabetes, setDiabetes] = useState('N');
  const [tireoide, setTireoide] = useState('N');
  const [marcaPasso, setMarcaPasso] = useState('N');

  const [cardiacoObservacoes, setCardiacoObservacoes] = useState('');

  const [hipotensao, setHipotensao] = useState('N');
  const [hipertensao, setHipertensao] = useState('N');

  const [alergias, setAlergias] = useState('');

  const [tratamentoDermatologico, setTratamentoDermatologico] = useState('N');

  const [
    tratamentoDermatologicoJustificativa,
    settratamentoDermatologicoJustificativa,
  ] = useState('');
  const [
    tratamentoDermatologicoEmUso,
    settratamentoDermatologicoEmUso,
  ] = useState('');
  const [
    tratamentoDermatologicoTempo,
    settratamentoDermatologicoTempo,
  ] = useState('');

  const [tratamentoAnterior, setTratamentoAnterior] = useState('N');

  const [
    tratamentoAnteriorJustivicativa,
    setTratamentoAnteriorJustivicativa,
  ] = useState('');
  const [tratamentoAnteriorUsado, setTratamentoAnteriorUsado] = useState('');
  const [tratamentoAnteriorTempo, setTratamentoAnteriorTempo] = useState('');

  const [ansiedade, setAnsiedade] = useState('N');
  const [impaciencia, setImpaciencia] = useState('N');
  const [depressao, setDepressao] = useState('N');
  const [choqueEmocional, setChoqueEmocional] = useState('N');
  const [antidepressivo, setAntidepressivo] = useState('N');

  const [antidepressivos, setAntidepressivos] = useState('');

  const [sono, setSono] = useState(1);
  const [remedioDormir, setRemedioDormir] = useState('N');

  const [sensibilidadeDor, setSensibilidadeDor] = useState(1);
  const [estresse, setEstresse] = useState(1);
  const [checkups, setCheckups] = useState('N');

  const [enfermidadesAtuais, setEnfermidadesAtuais] = useState('');
  const [enfermidadesAnteriores, setEnfermidadesAnteriores] = useState('');

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
  const [atividadesFisicas, setAtividadesFisicas] = useState(1);

  const [quaisAtividades, setQuaisAtividades] = useState('');
  const [alimentacao, setAlimentacao] = useState('');
  const [aguaQuantidade, setAguaQuantidade] = useState('');
  const [aguaCopos, setAguaCopos] = useState('');
  const [etilismo, setEtilismo] = useState('');

  const [fumante, setFumante] = useState('N');

  const [cigarrosDia, setCigarrosDia] = useState('');
  const [cigarrosInicio, setCigarrosInicio] = useState('');
  const [cigarrosFim, setCigarrosFim] = useState('');

  const [funcaoIntestinal, setFuncaoIntestinal] = useState(1);

  const [funcaoIntestinalObs, setFuncaoIntestinalObs] = useState('');
  const [infoComplementar, setInfoComplementar] = useState('');
  const [tratamentosAnteriores, setTratamentosAnteriores] = useState('');
  const [cirurgiaPlastica, setCirurgiaPlastica] = useState('N');
  const [cirurgiaPlasticaFace, setCirurgiaPlasticaFace] = useState('');
  const [cirurgiaPlasticaFaceTempo, setCirurgiaPlasticaFaceTempo] = useState(
    '',
  );
  const [limpeza, setLimpeza] = useState('');
  const [esfoliacao, setEsfoliacao] = useState('');
  const [tonioficacao, setTonioficacao] = useState('');
  const [acidos, setAcidos] = useState('');
  const [hidratacao, setHidratacao] = useState('');
  const [tratamentosEspecificos, setTratamentosEspecificos] = useState('');
  const [fotoprotecao, setFotoprotecao] = useState('');

  const [exposicaoSolar, setExposicaoSolar] = useState(1);

  const [usoCosmeticos, setusoCosmeticos] = useState('');
  const [usoCosmeticosSensibilidade, setusoCosmeticosSensibilidade] = useState(
    '',
  );

  const [fitzpatrick, setFitzpatrick] = useState(1);
  const [etnia, setEtnia] = useState(1);
  const [tipoPele, setTipoPele] = useState(1);
  const [aoTato, setAoTato] = useState(1);
  const [sensibilidadePele, setSensibilidadePele] = useState(1);

  const [sensibilidadePeleObs, setSensibilidadePeleObs] = useState('');

  const [acromias, setAcromias] = useState('N');
  const [hipocromias, setHipocromias] = useState('N');
  const [efelides, setEfelides] = useState('N');
  const [melasmas, setMelasmas] = useState('N');
  const [lentigos, setLentigos] = useState('N');
  const [melanose, setMelanose] = useState('N');
  const [posTraumatica, setPosTraumatica] = useState('N');
  const [posInflamatoria, setPosInflamatoria] = useState('N');
  const [xantelasmas, setXantelasmas] = useState('N');
  const [hiperplasiaSebacea, setHiperplasiaSebacea] = useState('N');
  const [cicatrizes, setCicatrizes] = useState('N');
  const [seborreia, setSeborreia] = useState('N');
  const [flacidesMuscular, setFlacidesMuscular] = useState('N');
  const [comedoesCapilares, setComedoesCapilares] = useState('N');
  const [eritemas, setEritemas] = useState('N');
  const [verrugas, setVerrugas] = useState('N');
  const [queratose, setQueratose] = useState('N');
  const [asfitica, setAsfitica] = useState('N');
  const [ostiosDilatados, setOstiosDilatados] = useState('N');
  const [flacidezTissular, setFlacidezTissular] = useState('N');
  const [micromedoes, setMicromedoes] = useState('N');
  const [edemas, setEdemas] = useState('N');
  const [nevos, setNevos] = useState('N');
  const [dermografismo, setDermografismo] = useState('N');
  const [talangiectasias, setTalangiectasias] = useState('N');
  const [miliuns, setMiliuns] = useState('N');
  const [escoriacoes, setEscoriacoes] = useState('N');
  const [comedoesAbertos, setComedoesAbertos] = useState('N');
  const [hematomas, setHematomas] = useState('N');
  const [fotoenvelhecimento, setFotoenvelhecimento] = useState(1);

  const [verrugasFrontal, setVerrugasFrontal] = useState('');
  const [verrugasGlabela, setVerrugasGlabela] = useState('');
  const [verrugasOrbicularOlhos, setVerrugasOrbicularOlhos] = useState('');
  const [verrugasOrbicularLabios, setVerrugasOrbicularLabios] = useState('');
  const [verrugasLateralFace, setVerrugasLateralFace] = useState('');
  const [verrugasSulco, setVerrugasSulco] = useState('');
  const [verrugasPescoco, setVerrugasPescoco] = useState('');
  const [verrugasColo, setVerrugasColo] = useState('');

  // const [comedoesCapilaresAcne, setComedoesCapilaresAcne] = useState('N');
  // const [micromedoesAcne, setMicromedoesAcne] = useState('N');
  // const [comedoesAbertosAcne, setComedoesAbertosAcne] = useState('N');
  const [pustulas, setPustulas] = useState('N');
  const [nodulos, setNodulos] = useState('N');
  const [comedoesFechadosAcne, setComedoesFechadosAcne] = useState('N');
  const [papulas, setPapulas] = useState('N');

  const [grauAcne, setGrauAcne] = useState(1);

  // const [escoriacoesAcne, setEscoriacoesAcne] = useState('N');
  const [juvenilVulgar, setJuvenilVulgar] = useState('N');
  const [tardia, setTardia] = useState('N');
  const [acneFamilia, setAcneFamilia] = useState('N');

  const [acneInicio, setAcneInicio] = useState('');
  const [acneEvolucao, setAcneEvolucao] = useState('');
  const [outrasConsideracoes, setOutrasConsideracoes] = useState('');

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

  const [clientesLista, setClientesLista] = useState([]);
  const [grausAcneLista, setGrausAcneLista] = useState([]);
  const [estresseLista, setEstresseLista] = useState([]);
  const [etniaLista, setEtniaLista] = useState([]);
  const [exposicaoSolarLista, setExposicaoSolarLista] = useState([]);
  const [fotoenvelhecimentoLista, setFotoenvelhecimentoLista] = useState([]);
  const [fototipoLista, setFototipoLista] = useState([]);
  const [freqAtvFisicaLista, setFreqAtvFisicaLista] = useState([]);
  const [funcIntestinalLista, setFuncIntestinalLista] = useState([]);
  const [peleAoTatoLista, setPeleAoTatoLista] = useState([]);
  const [peleSensibilidadeLista, setPeleSensibilidadeLista] = useState([]);
  const [sensibilidadeDorLista, setSensibilidadeDorLista] = useState([]);
  const [sonoLista, setSonoLista] = useState([]);
  const [tipoPeleLista, setTipoPeleLista] = useState([]);
  useEffect(() => {
    api
      .get('aux', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(resp => {
        setGrausAcneLista(resp.data.acneGrau);
        setEstresseLista(resp.data.estresse);
        setEtniaLista(resp.data.etnia);
        setExposicaoSolarLista(resp.data.exposicaoSolar);
        setFotoenvelhecimentoLista(resp.data.fotoenvelhecimento);
        setFototipoLista(resp.data.fototipo);
        setFreqAtvFisicaLista(resp.data.frequenciaAtividadesFisicas);
        setFuncIntestinalLista(resp.data.funcaoIntestinal);
        setPeleAoTatoLista(resp.data.peleAoTato);
        setPeleSensibilidadeLista(resp.data.peleSensibilidade);
        setSensibilidadeDorLista(resp.data.sensibilidadeADor);
        setSonoLista(resp.data.sono);
        setTipoPeleLista(resp.data.tipoPele);
      })
      .catch(e => console.log(e));

    api
      .get(`record/${fichaId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(resp => {
        console.log(resp);
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
        <Title>Dados gerais de saúde e hábitos de vida</Title>
        <Form>
          <RadioTitle>Cliente:</RadioTitle>
          <RadioView>
            <Picker
              style={{ height: 40, width: 300 }}
              selectedValue={cliente}
              onValueChange={(itemValue, itemIndex) => setCliente(itemValue)}
            >
              <Picker.Item label="Selecione o cliente" value={0} />
              {/* <FlatList
                keyExtractor={item => item.id}
                data={clientesLista}
                renderItem={({ item }: any) => (
                  <Picker.Item label={item.nome} value={item.id} />
                )}
              /> */}
              {clientesLista.map((item, i) => {
                return (
                  <Picker.Item
                    key={item.id}
                    label={item.nome}
                    value={item.id}
                  />
                );
              })}
            </Picker>
          </RadioView>
          <InputFicha
            value={queixaPrincipal}
            onChangeText={setQueixaPrincipal}
            name="queixa"
            label="Queixa principal"
          />
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
              value={alteracoesCicloMenstrual}
              onChangeText={setAlteracoesCicloMenstrual}
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
            <RadioView>
              <RadioLabel>Meses de gestação: </RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={mesesGestacao}
                onValueChange={(itemValue, itemIndex) =>
                  setMesesGestacao(itemValue)
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
                <Picker.Item label="11" value={11} />
                <Picker.Item label="12" value={12} />
              </Picker>
            </RadioView>
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
                <Picker.Item label="11" value={11} />
                <Picker.Item label="12" value={12} />
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
                <Picker.Item label="11" value={11} />
                <Picker.Item label="12" value={12} />
              </Picker>
            </RadioView>

            <InputFicha
              value={idadeFilhos}
              onChangeText={setIdadeFilhos}
              name="idades_filhos"
              placeholder="Idades dos filhos"
            />

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
            <InputFicha
              value={seiosAlteracoes}
              onChangeText={setSeiosAlteracoes}
              name="seios_alteracoes"
              placeholder="Alterações"
            />

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
              value={contraceptivosTempo}
              onChangeText={setContraceptivosTempo}
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
              value={hirsutismoIdade}
              onChangeText={setHirsutismoIdade}
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
            <InputFicha
              value={cardiacoObservacoes}
              onChangeText={setCardiacoObservacoes}
              name="cardiaco_observacoes"
              placeholder="Outros"
            />
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
            <InputFicha
              value={alergias}
              onChangeText={setAlergias}
              name="alergias"
              placeholder="Quais?"
            />
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
              value={tratamentoDermatologicoJustificativa}
              onChangeText={settratamentoDermatologicoJustificativa}
              name="tratamento_dermatologico_justificacao"
              placeholder="Por quê?"
            />
            <InputFicha
              value={tratamentoDermatologicoEmUso}
              onChangeText={settratamentoDermatologicoEmUso}
              name="tratamento_dermatologico_em_uso"
              placeholder="Tratamento em uso (oral/tópico)"
            />
            <InputFicha
              value={tratamentoDermatologicoTempo}
              onChangeText={settratamentoDermatologicoTempo}
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
              value={tratamentoAnteriorJustivicativa}
              onChangeText={setTratamentoAnteriorJustivicativa}
              name="tratamento_dermatologico_anterior_justificativa"
              placeholder="Por quê?"
            />
            <InputFicha
              value={tratamentoAnteriorUsado}
              onChangeText={setTratamentoAnteriorUsado}
              name="tratamento_dermatologico_anterior"
              placeholder="Tratamento usado (oral/tópico)"
            />
            <InputFicha
              value={tratamentoAnteriorTempo}
              onChangeText={setTratamentoAnteriorTempo}
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
            <InputFicha
              value={antidepressivos}
              onChangeText={setAntidepressivos}
              name="antidepressivos"
              placeholder="Quais?"
            />
            <RadioView>
              <RadioLabel>Sono</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={sono}
                onValueChange={(itemValue, itemIndex) => setSono(itemValue)}
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={sonoLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {sonoLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
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
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={sensibilidadeDorLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {sensibilidadeDorLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>

            <RadioView>
              <RadioLabel>Estresse: </RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={estresse}
                onValueChange={(itemValue, itemIndex) => setEstresse(itemValue)}
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={estresseLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {estresseLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
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
              value={enfermidadesAtuais}
              onChangeText={setEnfermidadesAtuais}
              name="enfermidades_atuais"
              placeholder="Enfermidades atuais:"
            />
            <InputFicha
              value={enfermidadesAnteriores}
              onChangeText={setEnfermidadesAnteriores}
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
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={freqAtvFisicaLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {freqAtvFisicaLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>
            <InputFicha
              value={quaisAtividades}
              onChangeText={setQuaisAtividades}
              name="atividades_fisicas"
              placeholder="Quais?"
            />
            <InputFicha
              value={alimentacao}
              onChangeText={setAlimentacao}
              name="alimentacao"
              placeholder="Alimentação:"
            />
            <InputFicha
              value={aguaQuantidade}
              onChangeText={setAguaQuantidade}
              name="agua"
              placeholder="Quantidade de água"
            />
            <InputFicha
              value={aguaCopos}
              onChangeText={setAguaCopos}
              name="copos"
              placeholder="copos/dia"
            />
            <InputFicha
              value={etilismo}
              onChangeText={setEtilismo}
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
            <InputFicha
              value={cigarrosDia}
              onChangeText={setCigarrosDia}
              name="fumante_quantidade"
              placeholder="Quantos/dia"
            />
            <InputFicha
              value={cigarrosInicio}
              onChangeText={setCigarrosInicio}
              name="fumante_tempo"
              placeholder="Desde quando?"
            />
            <InputFicha
              value={cigarrosFim}
              onChangeText={setCigarrosFim}
              name="fumante_parada"
              placeholder="Parou a quanto tempo?"
            />

            <RadioTitle>Função intestinal :</RadioTitle>
            <RadioView>
              <RadioLabel>Regular</RadioLabel>
              <RadioButton
                value="Regular"
                status={funcaoIntestinal === 1 ? 'checked' : 'unchecked'}
                onPress={() => setFuncaoIntestinal(1)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Ruim</RadioLabel>
              <RadioButton
                value="Ruim"
                status={funcaoIntestinal === 2 ? 'checked' : 'unchecked'}
                onPress={() => setFuncaoIntestinal(2)}
              />
            </RadioView>
            <InputFicha
              value={funcaoIntestinalObs}
              onChangeText={setFuncaoIntestinalObs}
              name="intestino_obs"
              placeholder="Observação:"
            />
          </>

          {/* Informações complementares */}
          <>
            <Area>
              <AreaText>Informações complementares</AreaText>
            </Area>
            <InputFicha
              value={infoComplementar}
              onChangeText={setInfoComplementar}
              name="info_complementar"
            />
          </>

          {/* Informações e avaliações estéticas */}
          <>
            <Area>
              <AreaText>Informações e avaliações estéticas</AreaText>
            </Area>
            <InputFicha
              value={tratamentosAnteriores}
              onChangeText={setTratamentosAnteriores}
              name="tratamentos_anteriores"
              placeholder="Tratamentos estéticos anteriores:"
            />

            <RadioTitle>Cirurgia plástica na face?</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={cirurgiaPlastica === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setCirurgiaPlastica('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={cirurgiaPlastica === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setCirurgiaPlastica('N')}
              />
            </RadioView>
            <InputFicha
              value={cirurgiaPlasticaFace}
              onChangeText={setCirurgiaPlasticaFace}
              name="cirurgia_qual"
              placeholder="Qual?"
            />
            <InputFicha
              value={cirurgiaPlasticaFaceTempo}
              onChangeText={setCirurgiaPlasticaFaceTempo}
              name="cirurgia_tempo"
              placeholder="Quanto tempo?"
            />
          </>

          {/* Cuidados diarios com a pele - Uso de cosméticos */}
          <>
            <Area>
              <AreaText>
                Cuidados diarios com a pele - Uso de cosméticos
              </AreaText>
            </Area>
            <InputFicha
              value={limpeza}
              onChangeText={setLimpeza}
              name="limpeza"
              placeholder="Limpeza:"
            />
            <InputFicha
              value={esfoliacao}
              onChangeText={setEsfoliacao}
              name="esfoliacao"
              placeholder="Esfoliação:"
            />
            <InputFicha
              value={tonioficacao}
              onChangeText={setTonioficacao}
              name="tonificacao"
              placeholder="Tonificação:"
            />
            <InputFicha
              value={acidos}
              onChangeText={setAcidos}
              name="acidos"
              placeholder="Ácidos:"
            />
            <InputFicha
              value={hidratacao}
              onChangeText={setHidratacao}
              name="hidratacao"
              placeholder="Hidratação:"
            />
            <InputFicha
              value={tratamentosEspecificos}
              onChangeText={setTratamentosEspecificos}
              name="tratamentos_especificos"
              placeholder="Tratamentos específicos:"
            />
            <InputFicha
              value={fotoprotecao}
              onChangeText={setFotoprotecao}
              name="fotoprotecao"
              placeholder="Fotoproteção:"
            />
            <RadioView>
              <RadioLabel>
                Exposição solar (praia/piscina/atividade ao ar livre) :
              </RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={exposicaoSolar}
                onValueChange={(itemValue, itemIndex) =>
                  setExposicaoSolar(itemValue)
                }
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={exposicaoSolarLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {exposicaoSolarLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>
            <InputFicha
              value={usoCosmeticos}
              onChangeText={setusoCosmeticos}
              name="maquiagem"
              placeholder="Maquiagem:"
            />
            <InputFicha
              value={usoCosmeticosSensibilidade}
              onChangeText={setAlimentacao}
              name="sensibilidade_cosmeticos"
              placeholder="Já apresentou sensibilidade a cosméticos?"
            />
          </>

          {/* Fototipo segundo a classificação de Fitzpatrick */}
          <>
            <Area>
              <AreaText>
                Fototipo segundo a classificação de Fitzpatrick
              </AreaText>
            </Area>

            <RadioView>
              <RadioLabel>
                I - caucasiano - pele muito clara, sempre queima, nunca bronzeia
              </RadioLabel>
              <RadioButton
                value="I"
                status={fitzpatrick === 1 ? 'checked' : 'unchecked'}
                onPress={() => setFitzpatrick(1)}
              />
            </RadioView>

            <RadioView>
              <RadioLabel>
                II - Branco - Pele clara, sempre queima, algumas vezes bronzeia
              </RadioLabel>
              <RadioButton
                value="II"
                status={fitzpatrick === 2 ? 'checked' : 'unchecked'}
                onPress={() => setFitzpatrick(2)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>
                III - Moreno Claro - Pele menos clara, algumas vezes queima,
                sempre bronzeia
              </RadioLabel>
              <RadioButton
                value="III"
                status={fitzpatrick === 3 ? 'checked' : 'unchecked'}
                onPress={() => setFitzpatrick(3)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>
                IV - Moreno - Pele morena clara, raramente queima, sempre
                bronzeia
              </RadioLabel>
              <RadioButton
                value="IV"
                status={fitzpatrick === 4 ? 'checked' : 'unchecked'}
                onPress={() => setFitzpatrick(4)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>
                V - Mulato - Pele morena escura, nunca queima, sempre brozeia
              </RadioLabel>
              <RadioButton
                value="V"
                status={fitzpatrick === 5 ? 'checked' : 'unchecked'}
                onPress={() => setFitzpatrick(5)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>
                VI - Negro - Pele negra, nunca queima, sempre bronzeia
              </RadioLabel>
              <RadioButton
                value="VI"
                status={fitzpatrick === 6 ? 'checked' : 'unchecked'}
                onPress={() => setFitzpatrick(6)}
              />
            </RadioView>
          </>
          {/* Etnia / Racial */}
          <>
            <Area>
              <AreaText>Etnia / Racial</AreaText>
            </Area>

            <RadioView>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={etnia}
                onValueChange={(itemValue, itemIndex) => setEtnia(itemValue)}
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={etniaLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {etniaLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>
          </>

          {/* Tipo de pele */}
          <>
            <Area>
              <AreaText>Pele</AreaText>
            </Area>

            <RadioView>
              <RadioLabel>Tipo de pele :</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={tipoPele}
                onValueChange={(itemValue, itemIndex) => setTipoPele(itemValue)}
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={tipoPeleLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {tipoPeleLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>
            <RadioView>
              <RadioLabel>Ao tato :</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={aoTato}
                onValueChange={(itemValue, itemIndex) => setAoTato(itemValue)}
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={peleAoTatoLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {peleAoTatoLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>
            <RadioView>
              <RadioLabel>Sensibilidade :</RadioLabel>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={sensibilidadePele}
                onValueChange={(itemValue, itemIndex) =>
                  setSensibilidadePele(itemValue)
                }
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={peleSensibilidadeLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {peleSensibilidadeLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>
            <InputFicha name="pele_obs" placeholder="Obs:" />

            <RadioTitle>Acromias:</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={acromias === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setAcromias('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={acromias === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setAcromias('N')}
              />
            </RadioView>
            <RadioTitle>Hipocromias</RadioTitle>
            <RadioView>
              <RadioLabel>Sim</RadioLabel>
              <RadioButton
                value="S"
                status={hipocromias === 'S' ? 'checked' : 'unchecked'}
                onPress={() => setHipocromias('S')}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Não</RadioLabel>
              <RadioButton
                value="N"
                status={hipocromias === 'N' ? 'checked' : 'unchecked'}
                onPress={() => setHipocromias('N')}
              />
            </RadioView>
            <RadioTitle>Hipercromias:</RadioTitle>
            <RadioView>
              <RadioLabel>Efelides :</RadioLabel>

              <RadioButton
                value={efelides}
                status={efelides === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  efelides === 'S' ? setEfelides('N') : setEfelides('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Melasmas :</RadioLabel>

              <RadioButton
                value={melasmas}
                status={melasmas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  melasmas === 'S' ? setMelasmas('N') : setMelasmas('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Lentigos :</RadioLabel>

              <RadioButton
                value={lentigos}
                status={lentigos === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  lentigos === 'S' ? setLentigos('N') : setLentigos('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Melanose solar/senil :</RadioLabel>

              <RadioButton
                value={melanose}
                status={melanose === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  melanose === 'S' ? setMelanose('N') : setMelanose('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Pós traumática :</RadioLabel>

              <RadioButton
                value={posTraumatica}
                status={posTraumatica === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  posTraumatica === 'S'
                    ? setPosTraumatica('N')
                    : setPosTraumatica('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Pós inflamatória :</RadioLabel>

              <RadioButton
                value={posInflamatoria}
                status={posInflamatoria === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  posInflamatoria === 'S'
                    ? setPosInflamatoria('N')
                    : setPosInflamatoria('S')
                }
              />
            </RadioView>
          </>

          {/* --------------- */}
          <>
            <Area />
            <RadioView>
              <RadioLabel>Xantelasmas :</RadioLabel>

              <RadioButton
                value={xantelasmas}
                status={xantelasmas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  xantelasmas === 'S'
                    ? setXantelasmas('N')
                    : setXantelasmas('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Hiperplasia sebácea :</RadioLabel>

              <RadioButton
                value={hiperplasiaSebacea}
                status={hiperplasiaSebacea === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  hiperplasiaSebacea === 'S'
                    ? setHiperplasiaSebacea('N')
                    : setHiperplasiaSebacea('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Cicatrizes :</RadioLabel>

              <RadioButton
                value={cicatrizes}
                status={cicatrizes === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  cicatrizes === 'S' ? setCicatrizes('N') : setCicatrizes('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Seborréia :</RadioLabel>

              <RadioButton
                value={seborreia}
                status={seborreia === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  seborreia === 'S' ? setSeborreia('N') : setSeborreia('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Flacidez muscular :</RadioLabel>

              <RadioButton
                value={flacidesMuscular}
                status={flacidesMuscular === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  flacidesMuscular === 'S'
                    ? setFlacidesMuscular('N')
                    : setFlacidesMuscular('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Comedões capilares :</RadioLabel>

              <RadioButton
                value={comedoesCapilares}
                status={comedoesCapilares === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  comedoesCapilares === 'S'
                    ? setComedoesCapilares('N')
                    : setComedoesCapilares('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Eritemas :</RadioLabel>

              <RadioButton
                value={eritemas}
                status={eritemas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  eritemas === 'S' ? setEritemas('N') : setEritemas('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Verrugas :</RadioLabel>

              <RadioButton
                value={verrugas}
                status={verrugas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  verrugas === 'S' ? setVerrugas('N') : setVerrugas('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Queratose pilar/folicular :</RadioLabel>

              <RadioButton
                value={queratose}
                status={queratose === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  queratose === 'S' ? setQueratose('N') : setQueratose('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Asfitica :</RadioLabel>

              <RadioButton
                value={asfitica}
                status={asfitica === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  asfitica === 'S' ? setAsfitica('N') : setAsfitica('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Óstios dilatados :</RadioLabel>

              <RadioButton
                value={ostiosDilatados}
                status={ostiosDilatados === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  ostiosDilatados === 'S'
                    ? setOstiosDilatados('N')
                    : setOstiosDilatados('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Flacidez tissular :</RadioLabel>

              <RadioButton
                value={flacidezTissular}
                status={flacidezTissular === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  flacidezTissular === 'S'
                    ? setFlacidezTissular('N')
                    : setFlacidezTissular('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Micromedões :</RadioLabel>

              <RadioButton
                value={micromedoes}
                status={micromedoes === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  micromedoes === 'S'
                    ? setMicromedoes('N')
                    : setMicromedoes('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Edemas :</RadioLabel>

              <RadioButton
                value={edemas}
                status={edemas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  edemas === 'S' ? setEdemas('N') : setEdemas('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Nevos (sinais/pintas) :</RadioLabel>

              <RadioButton
                value={nevos}
                status={nevos === 'S' ? 'checked' : 'unchecked'}
                onPress={() => (nevos === 'S' ? setNevos('N') : setNevos('S'))}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Dermografismo :</RadioLabel>

              <RadioButton
                value={dermografismo}
                status={dermografismo === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  dermografismo === 'S'
                    ? setDermografismo('N')
                    : setDermografismo('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Talangiectasias :</RadioLabel>

              <RadioButton
                value={talangiectasias}
                status={talangiectasias === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  talangiectasias === 'S'
                    ? setTalangiectasias('N')
                    : setTalangiectasias('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Miliuns :</RadioLabel>

              <RadioButton
                value={miliuns}
                status={miliuns === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  miliuns === 'S' ? setMiliuns('N') : setMiliuns('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Escoriações :</RadioLabel>

              <RadioButton
                value={escoriacoes}
                status={escoriacoes === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  escoriacoes === 'S'
                    ? setEscoriacoes('N')
                    : setEscoriacoes('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Comedões abertos :</RadioLabel>

              <RadioButton
                value={comedoesAbertos}
                status={comedoesAbertos === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  comedoesAbertos === 'S'
                    ? setComedoesAbertos('N')
                    : setComedoesAbertos('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Hematomas :</RadioLabel>

              <RadioButton
                value={hematomas}
                status={hematomas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  hematomas === 'S' ? setHematomas('N') : setHematomas('S')
                }
              />
            </RadioView>
          </>
          {/* Classificação segundo Glogau */}
          <>
            <Area>
              <AreaText>Classificação segundo Glogau</AreaText>
            </Area>

            <RadioView>
              <RadioLabel>Tipo I - sem rugas (20 - 30 anos)</RadioLabel>
              <RadioButton
                value="I"
                status={fotoenvelhecimento === 1 ? 'checked' : 'unchecked'}
                onPress={() => setFotoenvelhecimento(1)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>
                Tipo II - rugas somente com os movimentos (30 - 40 anos)
              </RadioLabel>
              <RadioButton
                value="II"
                status={fotoenvelhecimento === 2 ? 'checked' : 'unchecked'}
                onPress={() => setFotoenvelhecimento(2)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>
                Tipo III - presença de rugas mesmo em repouso (40 - 50 anos)
              </RadioLabel>
              <RadioButton
                value="III"
                status={fotoenvelhecimento === 3 ? 'checked' : 'unchecked'}
                onPress={() => setFotoenvelhecimento(3)}
              />
            </RadioView>
            <RadioView>
              <RadioLabel>
                Tipo IV - apenas as rugas dominam todo o rosto (acima de 60
                anos)
              </RadioLabel>
              <RadioButton
                value="IV"
                status={fotoenvelhecimento === 4 ? 'checked' : 'unchecked'}
                onPress={() => setFotoenvelhecimento(4)}
              />
            </RadioView>
          </>

          <InputFicha
            value={verrugasFrontal}
            onChangeText={setVerrugasFrontal}
            name="frontal"
            label="Frontal"
            placeholder="Descrição"
          />
          <InputFicha
            value={verrugasGlabela}
            onChangeText={setVerrugasGlabela}
            name="glabela"
            label="Glabela"
            placeholder="Descrição"
          />
          <InputFicha
            value={verrugasOrbicularOlhos}
            onChangeText={setVerrugasOrbicularOlhos}
            name="orbicular_dos_olhos"
            label="Orbicular dos Olhos"
            placeholder="Descrição"
          />
          <InputFicha
            value={verrugasOrbicularLabios}
            onChangeText={setVerrugasOrbicularLabios}
            name="orbicular_dos_labios"
            label="Orbicular dos Lábios"
            placeholder="Descrição"
          />
          <InputFicha
            value={verrugasLateralFace}
            onChangeText={setVerrugasLateralFace}
            name="lateral_da_face"
            label="Lateral da Face"
            placeholder="Descrição"
          />
          <InputFicha
            value={verrugasSulco}
            onChangeText={setVerrugasSulco}
            name="sulco_nasogeniano"
            label="Sulco Nasogeniano"
            placeholder="Descrição"
          />
          <InputFicha
            value={verrugasPescoco}
            onChangeText={setVerrugasPescoco}
            name="pescoco"
            label="Pescoço"
            placeholder="Descrição"
          />
          <InputFicha
            value={verrugasColo}
            onChangeText={setVerrugasColo}
            name="colo"
            label="Colo"
            placeholder="Descrição"
          />

          {/* Acne */}
          <>
            <Area>
              <AreaText>Acne</AreaText>
            </Area>

            {/* <RadioView>
              <RadioLabel>Comedões capilares :</RadioLabel>

              <RadioButton
                value={comedoesCapilaresAcne}
                status={comedoesCapilaresAcne === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  comedoesCapilaresAcne === 'S'
                    ? setComedoesCapilaresAcne('N')
                    : setComedoesCapilaresAcne('S')
                }
              />
            </RadioView>
            {/* <RadioView>
              <RadioLabel>Micromedões :</RadioLabel>

              <RadioButton
                value={micromedoesAcne}
                status={micromedoesAcne === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  micromedoesAcne === 'S'
                    ? setMicromedoesAcne('N')
                    : setMicromedoesAcne('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Comedões abertos :</RadioLabel>

              <RadioButton
                value={comedoesAbertosAcne}
                status={comedoesAbertosAcne === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  comedoesAbertosAcne === 'S'
                    ? setComedoesAbertosAcne('N')
                    : setComedoesAbertosAcne('S')
                }
              />
            </RadioView> */}
            <RadioView>
              <RadioLabel>Comedões fechados :</RadioLabel>

              <RadioButton
                value={comedoesFechadosAcne}
                status={comedoesFechadosAcne === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  comedoesFechadosAcne === 'S'
                    ? setComedoesFechadosAcne('N')
                    : setComedoesFechadosAcne('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Pústulas :</RadioLabel>

              <RadioButton
                value={pustulas}
                status={pustulas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  pustulas === 'S' ? setPustulas('N') : setPustulas('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Pápulas :</RadioLabel>

              <RadioButton
                value={papulas}
                status={papulas === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  papulas === 'S' ? setPapulas('N') : setPapulas('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Nódulos :</RadioLabel>

              <RadioButton
                value={nodulos}
                status={nodulos === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  nodulos === 'S' ? setNodulos('N') : setNodulos('S')
                }
              />
            </RadioView>
            {/*
            <RadioView>
              <RadioLabel>Escoriações :</RadioLabel>

              <RadioButton
                value={escoriacoesAcne}
                status={escoriacoesAcne === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  escoriacoesAcne === 'S'
                    ? setEscoriacoesAcne('N')
                    : setEscoriacoesAcne('S')
                }
              />
            </RadioView> */}

            <RadioView>
              <Picker
                style={{ height: 40, width: 300 }}
                selectedValue={grauAcne}
                onValueChange={(itemValue, itemIndex) => setGrauAcne(itemValue)}
              >
                {/* <FlatList
                  keyExtractor={item => item.id}
                  data={grausAcneLista}
                  renderItem={({ item }: any) => (
                    <Picker.Item label={item.descricao} value={item.id} />
                  )}
                /> */}
                {grausAcneLista.map((item, i) => {
                  return (
                    <Picker.Item
                      key={item.id}
                      label={item.descricao}
                      value={item.id}
                    />
                  );
                })}
              </Picker>
            </RadioView>

            <RadioView>
              <RadioLabel>Juvenil/Vulgar :</RadioLabel>

              <RadioButton
                value={juvenilVulgar}
                status={juvenilVulgar === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  juvenilVulgar === 'S'
                    ? setJuvenilVulgar('N')
                    : setJuvenilVulgar('S')
                }
              />
            </RadioView>
            <RadioView>
              <RadioLabel>Tardia :</RadioLabel>

              <RadioButton
                value={tardia}
                status={tardia === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  tardia === 'S' ? setTardia('N') : setTardia('S')
                }
              />
            </RadioView>

            <RadioView>
              <RadioLabel>Acne na familia?</RadioLabel>

              <RadioButton
                value={acneFamilia}
                status={acneFamilia === 'S' ? 'checked' : 'unchecked'}
                onPress={() =>
                  acneFamilia === 'S'
                    ? setAcneFamilia('N')
                    : setAcneFamilia('S')
                }
              />
            </RadioView>
            <InputFicha
              value={acneInicio}
              onChangeText={setAcneInicio}
              name="acne_inicio"
              label="Inicio"
            />
            <InputFicha
              value={acneEvolucao}
              onChangeText={setAcneEvolucao}
              name="acne_evolucao"
              label="Evolução"
            />
          </>

          {/* Outras considerações */}
          <>
            <Area>
              <AreaText>Outras considerações</AreaText>
            </Area>
            <InputFicha
              value={outrasConsideracoes}
              onChangeText={setOutrasConsideracoes}
              name="outas_consideracoes"
              placeholder="Outras considerações"
            />
          </>
          {/* AQUIIIIIIIIIIIIIIIIIIIIII */}
          <Button
            onPress={() => {
              const formData = new FormData();
              // const ficha: CadastroFicha = {
              formData.append('queixaPrincipal', queixaPrincipal);
              formData.append(
                'ginecologistaUltimaConsulta',
                ultimaConsulta.toISOString().slice(0, 10),
              );
              formData.append('cicloMenstrualNormal', cicloMenstrualNormal);
              formData.append(
                'alteracoesCicloMenstrual',
                alteracoesCicloMenstrual,
              );
              formData.append(
                'primeiraMenstruacao',
                primeiraMenstruacao.toISOString().slice(0, 10),
              );
              formData.append(
                'ultimaMenstruacao',
                ultimaMenstruacao.toISOString().slice(0, 10),
              );
              formData.append('sop', sop);
              formData.append('climaterio', climaterio);
              formData.append('menopausa', menopausa);
              formData.append('reposicaoHormonal', reposicaoHormonal);
              formData.append('gestante', gestante);
              formData.append('mesesGestacao', mesesGestacao);
              formData.append('quantidadeGravidez', nroGravidez);
              formData.append('quantidadeFilhos', nroFilhos);
              formData.append('idadesFilhos', idadeFilhos);
              formData.append('seiosNormais', seios);
              formData.append('seiosAlteracoes', seiosAlteracoes);
              formData.append('contraceptivosHormonais', contraceptivos);
              formData.append(
                'contraceptivosHormonaisTempo',
                contraceptivosTempo,
              );
              formData.append('hirsutismo', hirsutismo);
              formData.append('hirsutismoRepentino', hirsutismoRepentino);
              formData.append('hirsutismoIdade', hirsutismoIdade);
              formData.append('diabetes', diabetes);
              formData.append('tireoide', tireoide);
              formData.append('marcaPasso', marcaPasso);
              formData.append('cardiacoObservacoes', cardiacoObservacoes);
              formData.append('hipotensao', hipotensao);
              formData.append('hipertensao', hipertensao);
              formData.append('alergias', alergias);
              formData.append(
                'tratamentoDermatologico',
                tratamentoDermatologico,
              );
              formData.append(
                'tratamentoDermatologicoJustificativa',
                tratamentoDermatologicoJustificativa,
              );
              formData.append(
                'tratamentoDermatologicoEmUso',
                tratamentoDermatologicoEmUso,
              );
              formData.append(
                'tratamentoDermatologicoEmUsoTempo',
                tratamentoDermatologicoTempo,
              );
              formData.append(
                'tratamentoDermatologicoAnterior',
                tratamentoAnterior,
              );
              formData.append(
                'tratamentoDermatologicoAnteriorJustificativa',
                tratamentoAnteriorJustivicativa,
              );
              formData.append(
                'tratamentoDermatologicoAnteriorUsado',
                tratamentoAnteriorUsado,
              );
              formData.append(
                'tratamentoDermatologicoAnteriorTempo',
                tratamentoAnteriorTempo,
              );
              formData.append('ansiedade', ansiedade);
              formData.append('impaciencia', impaciencia);
              formData.append('depressao', depressao);
              formData.append('choqueEmocional', choqueEmocional);
              formData.append('alergias', alergias);
              formData.append('usaAntidepressivos', antidepressivo);
              formData.append('antidepressivos', antidepressivos);
              formData.append('sonoId', sono);
              formData.append('usaRemediosParaDormir', remedioDormir);
              formData.append('sensibilidadeADorId', sensibilidadeDor);
              formData.append('estresseId', estresse);
              formData.append('checkupsMedicosRegularmente', checkups);
              formData.append('enfermidadesAtuais', enfermidadesAtuais);
              formData.append('enfermidadesAnteriores', enfermidadesAnteriores);
              formData.append('medicamentosDores', dores);
              formData.append('medicamentosEpilepsia', epilepsia);
              formData.append(
                'medicamentosAntecedentesOncologicos',
                antecedentesOncologicos,
              );
              formData.append('medicamentosRetencaoHidrica', retencaoHidrica);
              formData.append('medicamentosRosacea', rosacea);
              formData.append('medicamentosLentesDeContato', lentesDeContato);
              formData.append('enfermidadesAtuais', enfermidadesAtuais);
              formData.append('medicamentosTonturas', tonturas);
              formData.append('medicamentosProblemasRenais', problemasRenais);
              formData.append('medicamentosLupus', lupus);
              formData.append('medicamentosQueloides', queloides);
              formData.append('medicamentosImplanteDentario', implanteDentario);
              formData.append('medicamentosFaltaDeAr', faltaDeAr);
              formData.append('medicamentosUsoDeCorticoides', usoDeCorticoides);
              formData.append('medicamentosPsoriase', psoriase);
              formData.append(
                'medicamentosDermatiteSeborreica',
                dermatiteSeborreica,
              );
              formData.append(
                'medicamentosPlacasMetalicasFace',
                placasMetalicasNaFace,
              );
              formData.append(
                'frequenciaAtividadesFisicasId',
                atividadesFisicas,
              );
              formData.append('atividadesFisicas', quaisAtividades);
              formData.append('alimentacao', alimentacao);
              formData.append('aguaQuantidade', aguaQuantidade);
              formData.append('aguaCopos', aguaCopos);
              formData.append('etilismo', etilismo);
              formData.append('fumante', fumante);
              formData.append('cigarrosDia', cigarrosDia);
              formData.append('fumanteInicio', cigarrosInicio);
              formData.append('fumanteFim', cigarrosFim);
              formData.append('funcaoIntestinalId', funcaoIntestinal);
              formData.append('funcaoIntestinalObs', funcaoIntestinalObs);
              formData.append('informacoesComplementares', infoComplementar);
              formData.append(
                'tratamentosEsteticosAnteriores',
                tratamentosAnteriores,
              );
              formData.append('cirurgiaPlasticaFace', cirurgiaPlasticaFace);
              formData.append(
                'cirurgiaPlasticaFaceTempo',
                cirurgiaPlasticaFaceTempo,
              );
              formData.append('usoDeCosmeticosLimpeza', limpeza);
              formData.append('usoDeCosmeticosEsfoliacao', esfoliacao);
              formData.append('usoDeCosmeticosTonificacao', tonioficacao);
              formData.append('usoDeCosmeticosAcidos', acidos);
              formData.append('usoDeCosmeticosHidratacao', hidratacao);
              formData.append(
                'usoDeCosmeticosTratamentosEspecificos',
                tratamentosEspecificos,
              );

              formData.append('usoDeCosmeticosFotoprotecao', fotoprotecao);
              formData.append('exposicaoSolarId', exposicaoSolar);
              formData.append('usoDeCosmeticosMaquiagem', usoCosmeticos);
              formData.append(
                'cosmeticosSensibilidade',
                usoCosmeticosSensibilidade,
              );
              formData.append('fototipoId', fitzpatrick);
              formData.append('etniaId', etnia);
              formData.append('tipoPeleId', tipoPele);
              formData.append('peleAoTatoId', aoTato);

              formData.append('peleSensibilidadeId', sensibilidadePele);
              formData.append(
                'peleSensibilidadeObservacao',
                sensibilidadePeleObs,
              );
              formData.append('acromias', acromias);
              formData.append('hipocromias', hipocromias);
              formData.append('efelides', efelides);
              formData.append('melasmas', melasmas);
              formData.append('lentigos', lentigos);
              formData.append('melanose', melanose);
              formData.append('hipercromiaPosTraumatica', posTraumatica);
              formData.append('hipercromiaPosInflamatoria', posInflamatoria);
              formData.append('xantelasmas', xantelasmas);
              formData.append('hiperplasiaSebacea', hiperplasiaSebacea);
              formData.append('cicatrizes', cicatrizes);
              formData.append('seborreia', seborreia);
              formData.append('flacidezMuscular', flacidesMuscular);
              formData.append('comedoesCapilares', comedoesCapilares);
              formData.append('eritemas', eritemas);
              formData.append('verrugas', verrugas);
              formData.append('queratosePilarFolicular', queratose);
              formData.append('asfitica', asfitica);

              formData.append('ostiosDilatados', ostiosDilatados);
              formData.append('flacidezTissular', flacidezTissular);
              formData.append('microcomedoes', micromedoes);
              formData.append('edemas', edemas);
              formData.append('nevos', nevos);
              formData.append('dermografismo', dermografismo);
              formData.append('talangiectasias', talangiectasias);
              formData.append('miliuns', miliuns);
              formData.append('escoriacoes', escoriacoes);
              formData.append('comedoesAbertos', comedoesAbertos);
              formData.append('hematomas', hematomas);
              formData.append('fotoenvelhecimentoId', fotoenvelhecimento);
              formData.append('verrugasFrontal', verrugasFrontal);
              formData.append('verrugasGlabela', verrugasGlabela);
              formData.append('verrugasOrbicularOlhos', verrugasOrbicularOlhos);
              formData.append(
                'verrugasOrbicularLabios',
                verrugasOrbicularLabios,
              );
              formData.append('verrugasLateralFace', verrugasLateralFace);
              formData.append('verrugasSulcoNasogeniano', verrugasSulco);
              formData.append('verrugasPescoco', verrugasPescoco);
              formData.append('verrugasColo', verrugasColo);
              formData.append('pustulas', pustulas);
              formData.append('nodulos', nodulos);
              formData.append('comedoesFechados', comedoesFechadosAcne);
              formData.append('papulas', papulas);
              formData.append('acneGrauId', grauAcne);

              formData.append('acneJuvenilVulgar', juvenilVulgar);
              formData.append('acneTardia', tardia);
              formData.append('acneFamilia', acneFamilia);
              formData.append('acneInicio', acneInicio);
              formData.append('acneEvolucao', acneEvolucao);
              formData.append('outrasConsideracoes', outrasConsideracoes);
              formData.append('ativo', 'S');

              // };

              if (cliente === 0) {
                // erro sem cliente
              } else {
                props.navigation.navigate('Foto', { token, formData });
              }
            }}
          >
            Cadastrar
          </Button>
        </Form>
      </Container>
    </ScrollView>
  );
};

export default CadFicha;
