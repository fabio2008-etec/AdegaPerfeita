import React from "react";
import { View, Text, ScrollView } from "react-native";
import { estilo } from "./estilo";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

export default function TelaContato() {
  return (
   
    <View style={estilo.container}>
       <ScrollView>
      <Text style={estilo.title}>Entre em contato conosco para comprar nossos produtos</Text>

      <View style={estilo.card}>
        <Entypo name="phone" size={50} color="#400303" />
        <Text style={estilo.info}>Telefone: </Text>
        <Text style={estilo.detalheInfo}>(11) 98765-4321</Text>
      </View>

      <View style={estilo.card}>
        <Entypo name="location-pin" size={50} color="#400303" />
        <Text style={estilo.info}>Endereço: </Text>
        <Text style={estilo.detalheInfo}>Rua das Vinícolas, 123 - São Paulo, SP</Text>
      </View>

      <View style={estilo.card}>
        <FontAwesome5 name="envelope" size={50} color="#400303" />
        <Text style={estilo.info}>Email: </Text>
        <Text style={estilo.detalheInfo}>contato@adegaperfeita.com.br</Text>
      </View>

      <View style={estilo.card}>
        <AntDesign name="instagram" size={50} color="#400303" />
        <Text style={estilo.info}>Instagram: </Text>
        <Text style={estilo.detalheInfo}>@adegaperfeita</Text>
      </View>
      </ScrollView>
    </View>
  );
}
