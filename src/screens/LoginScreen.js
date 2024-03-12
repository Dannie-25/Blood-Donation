import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import StylesScreen from "../styles/StylesScreen";
import CustomTextInput from "../components/inputs/CustomTextInput";
import CustomButton from "../components/buttons/CustomButton";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
      navigation.navigate("Welcome", { username });
  }

  return (
    <View style={[StylesScreen.container, { backgroundColor: "#dc143c" }]}>
      <Image
        style={[StylesScreen.imgStyle, { width: 85, height: 130 }]}
        source={require("../img/gotita-de-sangre.png")}
      />
      <Text style={[StylesScreen.title, { color: "white" }]}>Blood Donation</Text>
      <Text style={[StylesScreen.title, { color: "white" }]}>Donar es salvar vidas</Text>
      <View style={StylesScreen.formContainer}>
        {loginError && (
          <Text style={StylesScreen.errorText}>
            Incorrect credentials. Please try again.
          </Text>
        )}
        <CustomTextInput
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <CustomTextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <CustomButton style={StylesScreen.buttonLogin} title="Continuar" onPress={handleLogin} />
      </View>
      <Text style={[StylesScreen.registerText, { color: "white" }]}>
        Don't have an account?{" "}
        <Text
          style={[StylesScreen.link, { color: "blue" }]}
          onPress={() => navigation.navigate("Register")}
        >
          Register here
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
