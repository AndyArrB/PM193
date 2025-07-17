import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile';
import Detalle from '../screens/detalle';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={Profile} options={{ title: 'Perfil' }} />
      <Stack.Screen name="Detalle" component={Detalle} options={{ title: 'Detalle del Usuario' }} />
    </Stack.Navigator>
  );
}
