import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Rotas } from "./src/routes/rotas";
import MonitoramentoConexao from "./src/service/MonitoramentoDeConexao";

const App = () => {
  return (
    <NavigationContainer>
      <MonitoramentoConexao />
      <Rotas />
    </NavigationContainer>
  );
};

export default App;
