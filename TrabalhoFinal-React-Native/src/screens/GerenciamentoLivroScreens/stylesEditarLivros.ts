import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
    justifyContent:"center",
    alignItems:"center"
    
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "rgb(196, 2, 255)",
    marginTop:40,
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "rgb(253, 253, 253)",
  },
  button: {
    backgroundColor: "#8A2BE2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop:10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
  textAutor:{
    color:"#504F4F",
    fontSize: 13,
  },
  itemImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#8A2BE2",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: "#8A2BE2",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
});

export default styles;
