import { StyleSheet } from "react-native";

const stylesAdicionar = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    alignItems: "center",
    justifyContent: "center",
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
  input: {
    width: "85%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 15,
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
  errorText: {
    color: "red",
    marginBottom: 15,
  },
});

export default stylesAdicionar;