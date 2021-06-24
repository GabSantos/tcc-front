import React, { useState, useEffect } from 'react';

import { ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import InputFicha from '../../components/InputFicha';
import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';

import {
  Area,
  AreaText,
  CardImage,
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

const Ficha: React.FC = props => {
  const { token, fichaId, imageUrl } = props.route.params;
  const [cliente, setCliente] = useState(0);
  useEffect(() => {
    api
      .get(`record/${fichaId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(resp => {
        setCliente(resp.data.cliente_id);
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
        <Form>
          <Button
            onPress={() => {
              props.navigation.navigate('Consulta', {
                token,
                fichaId,
                cliente,
              });
            }}
          >
            Nova consulta
          </Button>
          <Button
            onPress={() => {
              props.navigation.navigate('EditCliente', {
                token,
                fichaId,
                cliente,
              });
            }}
          >
            Editar cliente
          </Button>
          <Button
            onPress={() => {
              props.navigation.navigate('EditFicha', {
                token,
                fichaId,
                cliente,
              });
            }}
          >
            Edita ficha
          </Button>
          <CardImage
            style={{ resizeMode: 'contain' }}
            source={{ uri: imageUrl }}
          />
        </Form>
      </Container>
    </ScrollView>
  );
};

export default Ficha;
