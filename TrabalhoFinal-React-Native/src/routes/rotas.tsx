import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreens from "../screens/CadastroScreens/CadastroScreens";
import LoginScreens from "../screens/LoginScreens/LoginScreens";
import HomeScreen from "../screens/HomeScreens";
import GerenciamentoScreen from "../screens/GerenciamentoLivroScreens/GerenciamentoScreen";
import AdicionarLivrosScreen from "../screens/GerenciamentoLivroScreens/AdicionarLivrosScreen";
import GerenciarLivrosScreen from "../screens/GerenciamentoLivroScreens/EditarLivrosScreen";
import { StackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

export const Rotas = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={CadastroScreens}
        options={{ title: "Cadastro", headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreens}
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="Gerenciamento"
        component={GerenciamentoScreen}
        options={{ title: "Gerenciamento", headerShown: false }}
      />
      <Stack.Screen
        name="AdicionarLivros"
        component={AdicionarLivrosScreen}
        options={{ title: "Adicionar Livros", headerShown: false }}
      />
      <Stack.Screen
        name="GerenciarLivros"
        component={GerenciarLivrosScreen}
        options={{ title: "Gerenciar Livros", headerShown: false }}
      />
    </Stack.Navigator>
  );
};