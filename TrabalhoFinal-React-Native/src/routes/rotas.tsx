import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreens from "../screens/CadastroScreens/CadastroScreens";
import LoginScreens from "../screens/LoginScreens/LoginScreens";
import HomeScreen from "../screens/HomeScreens";
import GerenciamentoLivrosScreen from "../screens/GerenciamentoLivroScreens/GerenciamentoLivrosScreens";
import { StackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

export const Rotas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreens} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="Cadastro" component={CadastroScreens} />
      <Stack.Screen options={{headerShown: false}} name="GerenciamentoLivros" component={GerenciamentoLivrosScreen} />
    </Stack.Navigator>
  );
};
