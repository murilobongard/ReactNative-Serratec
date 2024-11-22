import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// npm install lucide-react-native
import { Home, Library, Users } from "lucide-react-native";
import CadastroScreens from "../screens/CadastroScreens/CadastroScreens";
import LoginScreens from "../screens/LoginScreens/LoginScreens";
import HomeScreen from "../screens/HomeScreens";
import GerenciamentoScreen from "../screens/GerenciamentoLivroScreens/GerenciamentoScreen";
import AdicionarLivrosScreen from "../screens/GerenciamentoLivroScreens/AdicionarLivrosScreen";
import GerenciarLivrosScreen from "../screens/GerenciamentoLivroScreens/EditarLivrosScreen";
import { TimeScreen } from "../screens/TimeScreens/TimeScreens";
import { StackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
          height: 80,
        },
        tabBarActiveTintColor: "#6200ee",
        tabBarInactiveTintColor: "#757575",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: 4,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Home size={size} color={color} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
      <Tab.Screen
        name="GerenciamentoTab"
        component={GerenciamentoScreen}
        options={{
          title: "Gerenciamento",
          tabBarIcon: ({ focused, color, size }) => (
            <Library
              size={size}
              color={color}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TimeTab"
        component={TimeScreen}
        options={{
          title: "Time",
          tabBarIcon: ({ focused, color, size }) => (
            <Users size={size} color={color} strokeWidth={focused ? 2.5 : 2} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Rotas = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={CadastroScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdicionarLivros"
        component={AdicionarLivrosScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GerenciarLivros"
        component={GerenciarLivrosScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
