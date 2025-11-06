import React from "react";
import { View, Text } from "react-native";
import { estilo } from "./estilo";

export default function TelaContato() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>Contato</Text>
      {/* Aqui você pode adicionar mais componentes para exibir as informações de contato */}
    </View>
  );
}
