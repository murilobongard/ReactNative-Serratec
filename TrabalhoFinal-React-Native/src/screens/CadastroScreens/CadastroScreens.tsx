import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const CadastroScreen = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");

  const URL = "https://673cede34db5a341d83372b0.mockapi.io/api/cadastro";

  const Cadastro = async () => {
    const userData = { nome, email, senha };

    try {
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
    }
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
};

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
  message: { marginTop: 10, color: "green" },
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

export default CadastroScreen;
