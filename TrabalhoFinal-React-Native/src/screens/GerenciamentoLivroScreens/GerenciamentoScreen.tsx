import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../types/navigation";
import stylesGerenciamento from "./stylesGerenciamento";
import Header from "../../components/Header";

type NavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Gerenciamento"
>;

const GerenciamentoScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <>
      <Header />
      <View style={stylesGerenciamento.container}>
        <Text style={stylesGerenciamento.titulo}>Gerenciamento</Text>
        <TouchableOpacity
          style={stylesGerenciamento.button}
          onPress={() => navigation.navigate("GerenciarLivros")}
        >
          <Text style={stylesGerenciamento.buttonText}>Gerenciar Livros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesGerenciamento.button}
          onPress={() => navigation.navigate("AdicionarLivros")}
        >
          <Text style={stylesGerenciamento.buttonText}>Adicionar Livros</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default GerenciamentoScreen;
