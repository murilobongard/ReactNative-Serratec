import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

interface Livro {
  id: string;
  titulo: string;
  autor: string;
}

const GerenciamentoLivrosScreen = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const [autor, setAutor] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();
  const URL = ""; // falta o krl da api

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    try {
      const response = await axios.get<Livro[]>(URL);
      setLivros(response.data);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os livros.");
    }
  };

  const handleAddLivro = async () => {
    if (!titulo || !autor) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post<Livro>(URL, { titulo, autor });
      setLivros([...livros, response.data]);
      setTitulo("");
      setAutor("");
      setError(null);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível adicionar o livro.");
    }
  };

  const handleDeleteLivro = async (id: string) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setLivros(livros.filter((livro) => livro.id !== id));
    } catch (error) {
      Alert.alert("Erro", "Não foi possível deletar o livro.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerenciamento de Livros</Text>
      <TextInput
        style={styles.input}
        placeholder="Título do Livro"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor do Livro"
        value={autor}
        onChangeText={setAutor}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleAddLivro}>
        <Text style={styles.buttonText}>Adicionar Livro</Text>
      </TouchableOpacity>
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: Livro }) => (
          <View style={styles.livroItem}>
            <Text style={styles.livroText}>{item.titulo}</Text>
            <Text style={styles.livroText}>{item.autor}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteLivro(item.id)}
            >
              <Text style={styles.buttonText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
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
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
  livroItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
  },
  livroText: {
    fontSize: 16,
    color: "#333",
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    borderRadius: 8,
    padding: 10,
  },
});

export default GerenciamentoLivrosScreen;