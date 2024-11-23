import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import Loading from "../../components/loading/Loading";
import styles from "../CadastroScreens/CadastroScreensStyles"
import { ScrollView } from "react-native";

const CadastroScreen = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const URL = "https://673cede34db5a341d83372b0.mockapi.io/api/cadastro";

  const Cadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro, Por favor, preencha todos os campos.");
      return;
    }

    Alert.alert(
      "Confirmação",
      "Você deseja realizar o cadastro?",

      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Ok",
          onPress: async () => {
            setLoading(true);
            try {
              const userData = { nome, email, senha };
              const response = await axios.post(URL, userData);

              if (response.status === 201) {
                setMessage("Cadastro realizado com sucesso!");
              } else {
                setMessage("Erro ao cadastrar. Verifique os dados.");
              }
            } catch (error: any) {
              if (error.response) {
                setMessage(error.response.data.message || "Erro no cadastro.");
              } else {
                setMessage("Erro na comunicação com o servidor.");
              }
            } finally {
              setLoading(false);
            }
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" :"height"}
    style={styles.container}>
      <Image source={require("../../../assets/3.png")} style={styles.image} />
      <Text style={styles.titulo}>Cadastre-se</Text>
      <Text style={styles.subTitulo}>Crie sua conta para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
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
      <TouchableOpacity style={styles.button} onPress={Cadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      <Loading visible={loading} />
      </KeyboardAvoidingView>
    
  );
};



export default CadastroScreen;
