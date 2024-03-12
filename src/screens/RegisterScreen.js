import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomTextInput from '../components/inputs/CustomTextInput';
import CustomButton from '../components/buttons/CustomButton';
import StylesScreen from "../styles/StylesScreen";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    // console.log('Intento de registro:', { username, password, fullName, gender });
    alert('Usuario registrado exitosamente');
    navigation.navigate('Login'); // Redirige al usuario a la pantalla de inicio de sesión después de registrarse
  };

  return (
    <View style={StylesScreen.containerRegister}>
      <Text style={StylesScreen.titleRegister}>Crear cuenta</Text>
      <CustomTextInput
        placeholder="Nombre"
        onChangeText={text => setFullName(text)}
      />

      <CustomTextInput
        placeholder="Correo electrónico"
        onChangeText={text => setUsername(text)}
      />
      <CustomTextInput
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <CustomTextInput
        placeholder="Género"
        onChangeText={text => setGender(text)}
      />
      <CustomButton title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
