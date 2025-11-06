import{ StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffffff",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    borderColor: "#bcbcbcff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 5,
    
  },
  info: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#400303",
    marginTop: 8,
  },
  detalheInfo: {
    fontSize: 16,
    color: "#400303",
    marginLeft: 5,
    marginTop: 1,
  },
}) 