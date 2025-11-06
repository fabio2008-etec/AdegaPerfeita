import { StyleSheet } from "react-native"

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
    backgroundColor: "#8d6161ff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    marginTop: 5,
    width: '100%',
    height: 140,
   
  },
  imagem: {
   flex: 1,
   width: 27,
   height: 27
  },
  nomeVinho: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    position: "absolute",
    top: 16,
    right: 16,
  },
  descricaoVinho: {
    fontSize: 13,
    color: "#fff",
    position: "absolute",
    bottom: 16,
    top: 45,
    left: 70,
    right: 10,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },

  imagem1: {
    flex: 1,
    width: 25,
    height: 25
   },
})
    