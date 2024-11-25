import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../types/navigation";

type NavigationProps = NativeStackNavigationProp<StackParamList>;

const Header = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <LinearGradient
      colors={["rgba(0,0,0,1)", "rgba(0,0,0,0)"]}
      style={styles.header}
    >
      <View style={styles.headerSafeAreaView}>
        <Image
          source={require("../../../assets/3.png")}
          style={{ width: 100, height: 90, resizeMode: "contain" }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("TimeTab")}>
          <Text style={styles.textWhite}>Time</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Gerenciamento")}>
          <Text style={styles.textWhite}>Gerenciamento</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textWhite}>Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
export default Header;
