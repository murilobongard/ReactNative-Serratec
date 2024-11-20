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
import axios from "axios";

type NavigationProps = NativeStackNavigationProp<StackParamList>;

interface User {
  email: string;
  senha: string;
  nome?: string;
}

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
      const response = await axios.get<User[]>(URL);
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.senha === senha
      );
      if (user) {
        Alert.alert("Sucesso", `Bem-vindo, ${user.nome || email}!`);
        navigation.navigate("Home");
      } else {
        Alert.alert("Erro", "Email ou senha incorretos.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um problema ao verificar as credenciais.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo</Text>
      <Text style={styles.subTitulo}>Faça login para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
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
