import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../types/navigation";

type NavigationProps = NativeStackNavigationProp<StackParamList, "Login">;

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const navigation = useNavigation<NavigationProps>();
  const URL = "https://673cede34db5a341d83372b0.mockapi.io/api/cadastro";
  const Login = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", `Bem-vindo, ${email}!`);
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", data.message || "Credenciais inválidas.");
      }
    } catch (error) {
      Alert.alert(
        "Erro",
        "Ocorreu um erro ao tentar fazer login. Tente novamente."
      );
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo</Text>
      <Text style={styles.subTitulo}>Faça login para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#B0AFC6"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        placeholderTextColor="#B0AFC6"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={styles.button} onPress={Login}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={{ color: "#FFF", marginTop: 20 }}>
          Não tem uma conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B0082",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitulo: {
    fontSize: 18,
    color: "#DDD",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#8A2BE2",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});
