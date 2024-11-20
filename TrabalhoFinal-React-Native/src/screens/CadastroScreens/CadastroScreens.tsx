import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Loading } from "../../loading/Loading";

const CadastroScreens = () => {
  const [nome, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showRegisterScreen, setShowRegisterScreen] = useState(true); //visibilidade da tela cadastro

  const handleRegister = async () => {
        if (!nome || !email || !senha) {
          
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true); setShowRegisterScreen(false);
    try{
      await new Promise ((resolve)=> setTimeout(resolve,2000))
    Alert.alert("Sucesso", `Cadastro realizado para: ${nome}`);
  } finally {setLoading (false); setShowRegisterScreen(true)

  } 
} 

  return (
    
    <View style={styles.container}>
      <Loading visible={loading} />
      {showRegisterScreen && (
      <>
      <Text style={styles.titulo}>Criar Conta</Text>
      <Text style={styles.subtitulo}>Cadastre-se para começar</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor="#B0AFC6"
        value={nome}
        onChangeText={setName}
      />
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
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      </>
      )}
    </View>
  );
};

export default CadastroScreens;

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
  subtitulo: {
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
