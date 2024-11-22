import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },

  input: {
    borderWidth: 1,
    backgroundColor: "#eee",
    borderRadius: 4,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 15,
  },
  columnWrapper: {
    alignSelf: "center",
    gap: 2,
    paddingHorizontal: 2,
  },
  contentContainer: {
    gap: 10,
    paddingBottom: 50,
  },
  itemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: 200,
    height: 300,
    padding: 20,
  },
  listHeader: {
    marginVertical: 20,
  },
  horizontalFlatList: {
    paddingVertical: 5,
  },
  horizontalContentContainer: {
    gap: 10,
    paddingHorizontal: 12,
  },
  horizontalItemContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    width: 150,
    height: 250,
    padding: 10,
  },
  imageBook: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  titleBook: {
    fontSize: 12,
    paddingTop: 5,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  autor: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 0,
  },
  titleText: {
    fontWeight: "bold",
    letterSpacing: 3,
    fontSize: 15,
    color: "white",
  },

  principal: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#4B0082",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
  },
  modalImagem: {
    width: 150,
    height: 200,
    borderRadius: 8,
  },
  modalTitulo: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  modalAutor: {
    marginTop: 8,
    fontSize: 16,
    color: "#fff",
  },
  modalCategoria: {
    marginTop: 4,
    fontSize: 14,
    color: "#fff",
  },
  modalDescricao: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#fff"
  },
  modalPreco: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

});

export default styles;
