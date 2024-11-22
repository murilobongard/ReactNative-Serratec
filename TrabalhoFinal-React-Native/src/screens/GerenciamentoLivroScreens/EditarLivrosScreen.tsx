import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  TextInput,
  Image,
} from "react-native";
import axios from "axios";
import { livro } from "../../types/types";
import styles from "./stylesEditarLivros";
import Loading  from "../../components/loading/Loading"; // importação Loading


const GerenciarLivrosScreen: React.FC = () => {
  const [livros, setLivros] = useState<livro[]>([]);
  const [editando, setEditando] = useState<livro | null>(null);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [imagem, setImagem] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  const URL = "https://673f701ba9bc276ec4b891d5.mockapi.io/api/livros";
  
  useEffect(() => {
    fetchLivros();
  }, []);

  
  const fetchLivros = async () => {
    try {
      const response = await axios.get<livro[]>(URL);
      setLivros(response.data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os livros.");
    } 
  };
  const handleDeleteLivro = async (id: number) => {
    setLoading(true);
    try {
      await axios.delete(`${URL}/${id}`);
      setLivros(livros.filter((livro) => livro.id !== id));
      Alert.alert("Sucesso", "Livro deletado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível deletar o livro.");
    } finally{
      setLoading(false);
    }
  };

  const handleEditLivro = (livro: livro) => {
    setEditando(livro);
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setDescricao(livro.descricao);
    setValor(livro.valor.toString());
    setQuantidade(livro.quantidade.toString());
    setImagem(livro.imagem);
    setCategoria(livro.categoria);
  };

  const handleUpdateLivro = async () => {
    if (!editando) return;

    if (!titulo || !autor || !descricao || !valor || !quantidade || !imagem || !categoria) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.put<livro>(`${URL}/${editando.id}`, {
        titulo,
        autor,
        descricao,
        valor: parseFloat(valor),
        quantidade: parseInt(quantidade),
        imagem,
        categoria,
      });
      setLivros(livros.map((livro) => (livro.id === editando.id ? response.data : livro)));
      setEditando(null);
      setTitulo("");
      setAutor("");
      setDescricao("");
      setValor("");
      setQuantidade("");
      setImagem("");
      setCategoria("");
      setError(null);
      Alert.alert("Sucesso", "Livro atualizado com sucesso!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o livro.");
    }finally{
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar Livros</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {editando && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={descricao}
            onChangeText={setDescricao}
          />
          <TextInput
            style={styles.input}
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Quantidade"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Imagem URL"
            value={imagem}
            onChangeText={setImagem}
          />
          <TextInput
            style={styles.input}
            placeholder="Categoria"
            value={categoria}
            onChangeText={setCategoria}
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateLivro}>
            <Text style={styles.buttonText}>Atualizar Livro</Text>
          </TouchableOpacity>
          <Loading visible={loading} />
        </View>
      )}
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.imagem }} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.titulo}</Text>
            <Text style={styles.text}>{item.autor}</Text>
            <Text style={styles.text}>{item.descricao}</Text>
            <Text style={styles.text}>R$ {item.valor}</Text>
            <Text style={styles.text}>Quantidade: {item.quantidade}</Text>
            <Text style={styles.text}>Categoria: {item.categoria}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => handleEditLivro(item)}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteLivro(item.id)}>
              <Text style={styles.buttonText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Loading visible={loading} />
    </View>
  );
};

export default GerenciarLivrosScreen;