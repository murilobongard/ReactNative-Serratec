import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import styles from "./styles";
import { livro } from "../../types/types";
import { Alert } from "react-native";
import { getLivro } from "../../service/LivrosService";

// const data = [
//   {
//     title: "O Senhor dos AnÃ©is: A Sociedade do Anel",
//     author: "J.R.R. Tolkien",
//     image:
//       "https://m.media-amazon.com/images/I/81hCVEC0ExL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     title: "Harry Potter e a Pedra Filosofal",
//     author: "J.K. Rowling",
//     image:
//       "https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     title: "Orgulho e Preconceito",
//     author: "Jane Austen",
//     image:
//       "https://m.media-amazon.com/images/I/71Xta4Nf7uL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     title: "1984",
//     author: "George Orwell",
//     image: "https://m.media-amazon.com/images/I/61ZewDE3beL.jpg",
//   },
// ];

const HomeScreen = () => {
  const [livro, setLivro] = useState("");
  const [loading, setLoading] = useState(true);
  const [listaLivros, setListaLivros] = useState<livro[]>([]);

  const buscarLivro = async () => {
    setLoading(true);
    try {
      const livrosApi = await getLivro();
      setListaLivros(livrosApi);
    } catch (err) {
      Alert.alert("Erro ao achar livro");
    }
    useEffect(() => {
      buscarLivro();
    }, []);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Hero />
      <FlatList
        data={listaLivros}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => item.titulo + index}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.itemContainer}>
              <Image source={{ uri: item.imagem }} style={styles.imageBook} />
              <Text style={styles.titleBook}>{item.titulo}</Text>
              <Text style={styles.autor}>{item.autor}</Text>
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
              data={listaLivros}
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
              <Text style={styles.titleText}>OUTROS</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;