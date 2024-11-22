import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#8A2BE2",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;