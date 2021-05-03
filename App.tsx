/* eslint-disable global-require */
// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import Routes from './src/routes';

const App: React.FC = () => {
  const [loaded] = useFonts({
    MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
  });

  if (!loaded) return <AppLoading />;

  return (
    <NavigationContainer>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar barStyle="default" />
      <Routes />
    </NavigationContainer>
  );
};
export default App;
