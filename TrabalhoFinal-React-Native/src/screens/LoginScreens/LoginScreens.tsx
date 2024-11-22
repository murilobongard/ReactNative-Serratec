import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../types/navigation";
import axios from "axios";
import CadastroScreen from "../CadastroScreens/CadastroScreens";
import styles from "./LoginStyles"
import Loading  from "../../components/loading/Loading"; // importação Loading


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
  const [loading, setLoading] = useState(false)
  const URL = "https://673cede34db5a341d83372b0.mockapi.io/api/cadastro";

  const Login = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get<User[]>(URL);
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.senha === senha
      );
      if (user) {
        setLoading(false);
        Alert.alert("Sucesso", `Bem-vindo, ${user.nome || email}!`);
        navigation.navigate("Home");
      } else {
        setLoading(false);
        Alert.alert("Erro", "Email ou senha incorretos.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      Alert.alert("Erro", "Ocorreu um problema ao verificar as credenciais.");
    } 

  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/1.png")} style={styles.image} />
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
      <Loading visible={loading} />
    </View>
  );
};
export default LoginScreen;


