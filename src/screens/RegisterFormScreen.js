import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import StylesScreen from '../styles/StylesScreen';
import CustomTextInput from '../components/inputs/CustomTextInput';
import Form from 'react-native-advanced-forms'
import CustomButton from '../components/buttons/CustomButton';



const RegisterForm = ({ navigation }) => {

    const [Ocupacion, setOcupacion] = useState('');
    const [Domicilio, setDomicilio] = useState('');
    const [Codigo, setCodigo] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [Peso, setPeso] = useState('');
    const [Altura, setAltura] = useState('');
    const [Sangre, setSangre] = useState('');


    const handleRegisterForm = () => {
        // console.log({Domicilio,Telefono,Codigo,Ocupacion,Peso,Altura,Sangre});
        alert('Usuario Éxitosamente Registrado');
        navigation.navigate('Profile', {});
    };

    const [Donacion1, setDonacion1] = useState(false);
    const toggleSwitch1 = () => setDonacion1(previousState => !previousState);
    const [Donacion2, setDonacion2] = useState(false);
    const toggleSwitch2 = () => setDonacion2(previousState => !previousState);

    return (
        <View style={StylesScreen.container1}>
            <View styles={StylesScreen.firstSection}>
                <Text style={StylesScreen.title1}>Informacion Adicional</Text>
            </View>
            <View style={StylesScreen.secondSection}>
                <View>
                    <Text style={StylesScreen.label}>Domicilio</Text>
                    <CustomTextInput
                        onChangeText={text => setDomicilio(text)}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Form.Layout style={StylesScreen.row}>
                            <Text style={StylesScreen.label}>Teléfono</Text>
                            <Form.Field style={StylesScreen.field1}>
                                <Form.TextField value={Telefono} onChange={Number => setTelefono(Number)} keyboardType='numeric' />
                            </Form.Field>
                        </Form.Layout>
                        <Form.Layout style={StylesScreen.row}>
                            <Text style={StylesScreen.label}>Código Postal</Text>
                            <Form.Field style={StylesScreen.field}>
                                <Form.TextField value={Codigo} onChange={Number => setCodigo(Number)} keyboardType='numeric' />
                            </Form.Field>
                        </Form.Layout>
                    </View>
                    <Text style={StylesScreen.label}>Ocupacion</Text>
                    <CustomTextInput
                        onChangeText={text => setOcupacion(text)}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Form.Layout style={StylesScreen.row}>
                            <Text style={StylesScreen.label}>Peso</Text>
                            <Form.Field style={StylesScreen.field2}>
                                <Form.TextField value={Peso} onChange={Number => setPeso(Number)} keyboardType='numeric' />
                            </Form.Field>
                        </Form.Layout>
                        <Form.Layout style={StylesScreen.row}>
                            <Text style={StylesScreen.label}>Altura</Text>
                            <Form.Field style={StylesScreen.field3}>
                                <Form.TextField value={Altura} onChange={Number => setAltura(Number)} keyboardType='numeric' />
                            </Form.Field>
                        </Form.Layout>
                        <Form.Layout style={StylesScreen.row}>
                            <Text style={StylesScreen.label}>Tipo de Sangre</Text>
                            <Form.Field style={StylesScreen.field4}>
                                <Form.TextField value={Sangre} onChange={Number => setSangre(Number)} keyboardType='numeric' />
                            </Form.Field>
                        </Form.Layout>
                    </View>
                </View>
                <View style={{ ...StylesScreen.container2 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ ...StylesScreen.label, flex: 1, textAlign: 'left' }}>¿Donó Sangre en los últimos 3 años?</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#490208' }}
                            thumbColor={Donacion1 ? '#960612' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={Donacion1}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ ...StylesScreen.label, flex: 1, textAlign: 'left' }}>¿En los últimos 12 meses ha donado por lo menos 2 veces?</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#490208' }}
                            thumbColor={Donacion2 ? '#960612' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={Donacion2}
                        />
                    </View>
                </View>
                <CustomButton title="Registrarse" onPress={handleRegisterForm} />
            </View>
        </View>
    );
};

export default RegisterForm;
