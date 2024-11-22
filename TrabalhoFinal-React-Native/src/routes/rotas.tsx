import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreens from "../screens/CadastroScreens/CadastroScreens";
import LoginScreens from "../screens/LoginScreens/LoginScreens";
import HomeScreen from "../screens/HomeScreens";
import GerenciamentoScreen from "../screens/GerenciamentoLivroScreens/GerenciamentoScreen";
import AdicionarLivrosScreen from "../screens/GerenciamentoLivroScreens/AdicionarLivrosScreen";
import GerenciarLivrosScreen from "../screens/GerenciamentoLivroScreens/EditarLivrosScreen";
import { StackParamList } from "../types/navigation";
import { TimeScreen } from "../screens/TimeScreens/TimeScreens";
// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

export const Rotas = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreens}
        options={{ title: "Login", headerShown: false }}
      />
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
      <Stack.Screen
        name="Time"
        component={TimeScreen}
        options={{ title: "Time", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
