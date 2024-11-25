import { StyleSheet } from "react-native";

const stylesGerenciamento = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  titulo: {
    marginTop: 30,
    letterSpacing: 1,
    fontSize: 25,
    color: "#8A2BE2",
    fontWeight: "bold",
    marginBottom: 30,
    alignSelf: "center",
  },
  button: {
    width: "85%",
    height: 50,
    backgroundColor: "#8A2BE2",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default stylesGerenciamento;
