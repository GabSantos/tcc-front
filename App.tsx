// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Route from './src/App';

const App: React.FC = () => {
  return (
    <View>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar barStyle="default" />
      <Route />
    </View>
  );
};
export default App;
