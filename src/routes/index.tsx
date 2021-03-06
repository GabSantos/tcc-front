import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import EsqueciSenha from '../pages/EsqueciSenha';
import EditUsuario from '../pages/EditUsuario';

import CadCliente from '../pages/CadCliente';
import EditCliente from '../pages/EditCliente';

import ListFichas from '../pages/ListFichas';
import CadFicha from '../pages/CadFicha';
import EditFicha from '../pages/EditFicha';
import Ficha from '../pages/Ficha';
import Consulta from '../pages/Consulta';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = props => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#f4f4f4',
      },
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="EsqueciSenha" component={EsqueciSenha} />
    <Auth.Screen name="EditUsuario" component={EditUsuario} />

    <Auth.Screen name="CadCliente" component={CadCliente} />
    <Auth.Screen name="EditCliente" component={EditCliente} />

    <Auth.Screen name="ListFichas" component={ListFichas} />
    <Auth.Screen name="CadFicha" component={CadFicha} />
    <Auth.Screen name="Ficha" component={Ficha} />
    <Auth.Screen name="EditFicha" component={EditFicha} />
    <Auth.Screen name="Consulta" component={Consulta} />
  </Auth.Navigator>
);

export default AuthRoutes;
