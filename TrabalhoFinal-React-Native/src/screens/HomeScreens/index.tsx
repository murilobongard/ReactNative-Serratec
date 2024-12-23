import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Button,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "./styles";
import { livro } from "../../types/types";
import { Alert } from "react-native";
import { getLivro } from "../../service/LivrosService";
import Loading from "../../components/loading/Loading";

const livrosMaisVendidos = [
  {
    titulo: "O Senhor dos Aneis: A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    imagem:
      "https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    titulo: "Harry Potter e a Pedra Filosofal",
    autor: "J.K. Rowling",
    imagem:
      "https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    imagem:
      "https://m.media-amazon.com/images/I/71Xta4Nf7uL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    imagem: "https://m.media-amazon.com/images/I/61ZewDE3beL.jpg",
  },
];

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listaLivros, setListaLivros] = useState<livro[]>([]);
  const [originalData, setOriginalData] = useState<livro[]>([]);

  const [modal, setModal] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<livro | null>(null);

  const buscarLivro = async () => {
    setLoading(true);
    try {
      const livrosApi = await getLivro();
      setOriginalData(livrosApi);
      setListaLivros(livrosApi);
    } catch (err) {
      Alert.alert("Erro ao buscar livros!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarLivro();
  }, []);

  const search = (s: string) => {
    if (s === "") {
      setListaLivros(originalData);
    } else {
      const filteredBooks = originalData.filter((book) =>
        book.titulo.toLowerCase().includes(s.toLowerCase())
      );
      setListaLivros(filteredBooks);
    }
  };

  const abrirModalLivro = (itemSelecionado: livro) => {
    setItemSelecionado(itemSelecionado);
    setModal(true);
  };

  const fecharModalLivro = () => {
    setItemSelecionado(null);
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Hero />
      <Loading visible={loading} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Pesquisar"}
          onChangeText={(s) => search(s)}
        />
      </View>
      <FlatList
        data={listaLivros}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => item.titulo + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => abrirModalLivro(item)}
            >
              <Image source={{ uri: item.imagem }} style={styles.imageBook} />
              <Text style={styles.titleBook}>{item.titulo}</Text>
              <Text style={styles.autor}>{item.autor}</Text>
              <Text style={styles.autor}>{item.categoria}</Text>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>MAIS VENDIDOS</Text>
            </View>
            <FlatList
              horizontal={true}
              style={styles.horizontalFlatList}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalContentContainer}
              data={livrosMaisVendidos}
              keyExtractor={(item, index) => item.titulo + index}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.horizontalItemContainer}>
                  <Image
                    source={{ uri: item.imagem }}
                    style={styles.imageBook}
                  />
                  <Text style={styles.titleBook}>{item.titulo}</Text>
                  <Text style={styles.autor}>{item.autor}</Text>
                </TouchableOpacity>
              )}
            />
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>LANÇAMENTOS</Text>
            </View>
          </View>
        )}
      />
      {itemSelecionado && (
        <Modal
          visible={modal}
          animationType="slide"
          transparent={true}
          onRequestClose={fecharModalLivro}
        >
          <View style={styles.principal}>
            <View style={styles.modalContainer}>
              <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={true}
              >
                {itemSelecionado.imagem && (
                  <Image
                    source={{ uri: itemSelecionado.imagem }}
                    style={styles.modalImagem}
                  />
                )}
                <Text style={styles.modalTitulo}>{itemSelecionado.titulo}</Text>
                <Text style={styles.modalAutor}>
                  Autor: {itemSelecionado.autor}
                </Text>
                <Text style={styles.modalCategoria}>
                  {" "}
                  Categoria: {itemSelecionado.categoria}
                </Text>
                <Text style={styles.modalDescricao}>
                  {itemSelecionado.descricao}
                </Text>
                {itemSelecionado.valor !== undefined ? (
                  <Text style={styles.modalPreco}>
                    Preço: R$ {itemSelecionado.valor.toFixed(2)}
                  </Text>
                ) : (
                  <Text style={styles.modalPreco}>Preço: Não disponível</Text>
                )}
                <Button title="Fechar" onPress={fecharModalLivro} />
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default HomeScreen;
