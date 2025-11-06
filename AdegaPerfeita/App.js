import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import TelaInicial from "./Components/TelaInicial";
import TelaCatalogo from "./Components/TelaCatalogo";
import TelaContato from "./Components/TelaContato";

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={{
          headerStyle:{
          backgroundColor: '#400303'
        },
        headerTitleStyle: {
          color: '#fff',
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center',

        tabBarStyle: {
          backgroundColor: "#fff"
        },
        tabBarLabelStyle:{
          fontSize: 14,
          fontWeight: "bold"
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: "#ab887c",
        tabBarActiveBackgroundColor: "#400303",
     
        }}
      >
        <Abas.Screen
          name="Início"
          component={TelaInicial}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
             <Entypo name="home" color={ color } size={ 20 } />
            ),
          }}
        />
        <Abas.Screen
          name="Catalogo"
          component={TelaCatalogo}
          options={{
            tabBarLabel: 'Catálogo',
            tabBarIcon: ({ color, size }) => (
             <FontAwesome5 name="wine-bottle"  color={ color } size={ 20 }/>
            ),
          }}
        />
        <Abas.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color }) => (
              <AntDesign name="contacts" color={ color } size={ 20 }/>
            ),
          }}
        />
      </Abas.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
