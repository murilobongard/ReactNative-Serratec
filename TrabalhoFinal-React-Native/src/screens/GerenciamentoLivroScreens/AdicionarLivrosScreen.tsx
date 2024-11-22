import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import stylesAdicionar from "./stylesAdicionar"; // Importação do arquivo de estilos

const AdicionarLivrosScreen = () => {
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [quantidade, setQuantidade] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const URL = "https://673f701ba9bc276ec4b891d5.mockapi.io/api/livros";

  const handleAddLivro = async () => {
    if (!titulo || !autor || !descricao || !valor || !quantidade || !imagem || !categoria) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(URL, { titulo, autor, descricao, valor, quantidade, imagem, categoria });
      Alert.alert("Sucesso", "Livro adicionado com sucesso!");
      setTitulo("");
      setAutor("");
      setDescricao("");
      setValor("");
      setQuantidade("");
      setImagem("");
      setCategoria("");
      setError(null);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o livro.");
    }
  };

  return (
    <View style={stylesAdicionar.container}>
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
    </View>
  );
};

export default AdicionarLivrosScreen;