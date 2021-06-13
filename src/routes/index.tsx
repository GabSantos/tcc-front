import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import EsqueciSenha from '../pages/EsqueciSenha';
import CadCliente from '../pages/CadCliente';
import CadFicha from '../pages/CadFicha';
import EditUsuario from '../pages/EditUsuario';
import ListFichas from '../pages/ListFichas';
import Consulta from '../pages/Consulta';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#f4f4f4',
      },
    }}
  >
    <Auth.Screen name="Consulta" component={Consulta} />
    <Auth.Screen name="CadFicha" component={CadFicha} />
    <Auth.Screen name="ListFichas" component={ListFichas} />
    <Auth.Screen name="EditUsuario" component={EditUsuario} />
    <Auth.Screen name="CadCliente" component={CadCliente} />
    <Auth.Screen name="EsqueciSenha" component={EsqueciSenha} />
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
