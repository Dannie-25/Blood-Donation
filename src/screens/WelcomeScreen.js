import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import StylesScreen from '../styles/StylesScreen';
import CustomButton from '../components/buttons/CustomButton';

const Bienvenida = ({ navigation, username }) => {
  const [respuesta, setRespuesta] = useState(null);

  const manejarClick = (respuesta) => {
    navigation.navigate('Profile', {});
  }

  const Welcome = () => {
    navigation.navigate('Formulario', { username });
  };

  return (
    <View style={StylesScreen.containerWelcome}>
      <Text style={StylesScreen.titleWelcome}>Bienvenido</Text>
      <Text style={StylesScreen.subtitleWelcome}>¿Que busca?</Text>
      <CustomButton title="Ser Donador" onPress={Welcome} />
      <CustomButton title="Donante" onPress={manejarClick} />
      {respuesta && <Text style={StylesScreen.textWelcome}>Has seleccionado: {respuesta}</Text>}
    </View>
  );
}

export default Bienvenida;

