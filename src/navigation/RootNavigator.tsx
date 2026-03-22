import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './TabNavigator';
export type RootStackParamList = {
  Splash: undefined;
  Main: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
