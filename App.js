import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'; 
import RegisterFormScreen from './src/screens/RegisterFormScreen.js';
import ProfileScreen from './src/screens/ProfileScreen';
import StylesScreen from './src/styles/StylesScreen.js';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} /> 
        <Stack.Screen name="Formulario" component={RegisterFormScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ViewScreen" options={{ title: 'View Screen' }}>
          {() => (
            <View style={StylesScreen.container}>
              {}
              <Text></Text>
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
