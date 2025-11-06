import React from "react";
import { View, Text, ScrollView, Image} from "react-native";

import vinhoBranco from "../../assets/vinho-branco.jpg";
import vinhoRose from "../../assets/vinho-rose.jpg";
import vinhoTinto from "../../assets/vinho-tinto.jpg";
import vinhoSeco from "../../assets/vinho-seco.jpg";
import VinhoEspecial from "../../assets/vinho-especial.jpg";

import { estilo } from "./estilo";

export default function TelaCatalogo() {
  return (
    
    <View style={estilo.container}>
        <ScrollView>
      <Text style={estilo.title}>Nossos vinhos</Text>
      <Text style={estilo.subtitle}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
</Text>
    <View style={estilo.card}>
        
         <Image source={vinhoBranco} style={estilo.imagem}/>
        <Text style={estilo.nomeVinho}>Chatigny Chardonnay</Text>
        <Text style={estilo.descricaoVinho}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
    </View>

    <View style={estilo.card}>
        <Image source={vinhoRose} style={estilo.imagem}/>
        <Text style={estilo.nomeVinho}>Concha y Toro Exportacion</Text>
        <Text style={estilo.descricaoVinho}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
    </View>

    <View style={estilo.card}>
        <Text style={estilo.nomeVinho}>Portada Winemaker's</Text>
        <Text style={estilo.descricaoVinho}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
    </View>

    <View style={estilo.card}>
        <Text style={estilo.nomeVinho}>Elvio Cogno Ravera Barolo</Text>
        <Text style={estilo.descricaoVinho}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
    </View>
    </ScrollView>
    </View>
  );
}