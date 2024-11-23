import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#4B0082",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    image: {
      width: "100%",
      height: 150,
      resizeMode: "contain",
    },
    titulo: {
      fontSize: 32,
      color: "#FFF",
      fontWeight: "bold",
      marginBottom: 10,
    },
    subTitulo: {
      fontSize: 18,
      color: "#DDD",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: "#FFF",
      borderRadius: 8,
      paddingHorizontal: 15,
      fontSize: 16,
      color: "#333",
      marginBottom: 15,
   },
    message: { 
      marginTop: 10, color: "white" 
    },
    button: {
      width: "100%",
      height: 50,
      backgroundColor: "#8A2BE2",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 18,
      color: "#FFF",
      fontWeight: "bold",
    },
  });

  export default styles;
