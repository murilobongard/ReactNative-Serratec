import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import stylesAdicionar from "./stylesAdicionar"; 
import Loading  from "../../components/loading/Loading";
import { KeyboardAvoidingView } from "react-native";
import { createLivro } from "../../service/LivrosService";

const AdicionarLivrosScreen = ({ navigation }: { navigation: any }) => {
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  // const URL = "https://673fb001a9bc276ec4b95164.mockapi.io/Api/livros";

  const handleAddLivro = async () => {
    if (!titulo || !autor || !descricao || !valor || !quantidade || !imagem || !categoria) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    try {
      const novoLivro = { titulo, autor, descricao, valor: Number(valor), quantidade: Number(quantidade), imagem, categoria };
      await createLivro(novoLivro);
      Alert.alert("Sucesso", "Livro adicionado com sucesso!");
      setTitulo("");
      setAutor("");
      setDescricao("");
      setValor("");
      setQuantidade("");
      setImagem("");
      setCategoria("");
      setError(null);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o livro.");
    } finally{
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" :"height"}
      style={stylesAdicionar.container}>
      <Text style={stylesAdicionar.titulo}>Adicionar Livro</Text>
      {error ? <Text style={stylesAdicionar.errorText}>{error}</Text> : null}
      <TextInput
        style={stylesAdicionar.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={stylesAdicionar.input}
        placeholder="Autor"
        value={autor}
        onChangeText={setAutor}
      />
      <TextInput
        style={stylesAdicionar.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={stylesAdicionar.input}
        placeholder="Valor"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        style={stylesAdicionar.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />
      <TextInput
        style={stylesAdicionar.input}
        placeholder="Imagem URL"
        value={imagem}
        onChangeText={setImagem}
      />
      <TextInput
        style={stylesAdicionar.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TouchableOpacity style={stylesAdicionar.button} onPress={handleAddLivro}>
        <Text style={stylesAdicionar.buttonText}>Adicionar Livro</Text>
      </TouchableOpacity>
      <Loading visible={loading} />
      </KeyboardAvoidingView>  
      );
};

export default AdicionarLivrosScreen;