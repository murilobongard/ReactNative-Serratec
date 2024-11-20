import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreens from "../screens/CadastroScreens/CadastroScreens";
import LoginScreens from "../screens/LoginScreens/LoginScreens";
import IntermediariaScreen from "../screens/IntermediariaScreens/IntermediariaScreens";
import GerenciamentoLivrosScreen from "../screens/GerenciamentoLivroScreens/GerenciamentoLivrosScreens";
import { StackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

export const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreens} />
      <Stack.Screen name="Cadastro" component={CadastroScreens} />
      <Stack.Screen name="Intermediaria" component={IntermediariaScreen} />
      <Stack.Screen name="GerenciamentoLivros" component={GerenciamentoLivrosScreen} />
    </Stack.Navigator>
  );
};