import React from 'react';
import { TextInput } from 'react-native';
import StylesScreen from '../../styles/StylesScreen';

const CustomTextInput = ({ placeholder, secureTextEntry, onChangeText }) => {
    return (
        <TextInput
            style={StylesScreen.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
        />
    );
};

export default CustomTextInput;
