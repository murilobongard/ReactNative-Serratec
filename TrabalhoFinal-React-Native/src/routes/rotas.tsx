import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroScreens from "../screens/CadastroScreens/CadastroScreens";
import { StackParamList } from "../types/navigation";
import LoginScreens from "../screens/LoginScreens/LoginScreens";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const Rotas = () => {
  return (
    <Navigator>
      <Screen
        name="Cadastro"
        component={CadastroScreens}
        options={{
          title: "Gerenciador de Tarefas",
          //   headerShown: false,
        }}
      />
      <Screen name="Login" component={LoginScreens} />
    </Navigator>
  );
};
