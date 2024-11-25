import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const MonitoramentoDeConexao: React.FC = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      Alert.alert(
        "Sem Conexão",
        "Você está offline. Verifique sua conexão com a internet."
      );
    }
  }, [isConnected]);

  return <></>;
};

export default MonitoramentoDeConexao;
