import React from "react";
import { View, Text, StyleSheet, ImageBackground} from "react-native";
import { estilo } from "./estilo";

import capa from "../../assets/capa.jpg";

export default function TelaInicial() {
  return (
      <View style={estilo.container}>
        <ImageBackground
        style={{flex:1, width: '100%', height: '100%', justifyContent: "center", alignItems: "center"}}
        blurRadius={10}
        source={capa}
        >
          <Text style={estilo.title}>Adega Preferida</Text>
          <Text style={estilo.subtitle}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
      </View>
  );
}