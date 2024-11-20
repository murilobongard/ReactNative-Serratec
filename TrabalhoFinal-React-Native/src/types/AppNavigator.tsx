import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreens/LoginScreens";
import CadastroScreens from "../screens/CadastroScreens/CadastroScreens";
import IntermediariaScreen from "../screens/IntermediariaScreens/IntermediariaScreens";
import GerenciamentoLivrosScreen from "../screens/GerenciamentoLivroScreens/GerenciamentoLivrosScreens";
import { StackParamList } from "./navigation";

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={CadastroScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Intermediaria"
        component={IntermediariaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GerenciamentoLivros"
        component={GerenciamentoLivrosScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;