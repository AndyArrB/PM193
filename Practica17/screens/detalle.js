import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalle de Usuario</Text>
      <Button title="Regresar a perfil" onPress={() => navigation.goBack()} />
    </View>
  );
}
