import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../types/navigation";

type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <LinearGradient
      colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
      style={styles.header}
    >
      <View style={styles.headerSafeAreaView}>
        <Image
          source={require("../../../assets/3.png")}
          style={{ width: 70, height: 90, resizeMode: "contain" }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textWhite}>Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Gerenciamento")}>
          <Text style={styles.textWhite}>Gerenciamento</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textWhite}>Login</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Time")}>
          <Text style={styles.textWhite}>Sobre</Text>
        </TouchableOpacity> */}
      </View>
    </LinearGradient>
  );
};
export default Header;
