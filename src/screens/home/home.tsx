import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import homeStyles from './style';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '../../routes';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={homeStyles.container}>
      <StatusBar hidden/>
      <ScrollView>
      <Text style={homeStyles.titleText}>Crystal Blue</Text>
      <ImageBackground  source={require('../../images/breaking_bad_bg2.jpg')} style={homeStyles.image}/>
      <TextInput placeholder='Usuario...' style={homeStyles.textInput}/>
      <TextInput secureTextEntry={true} placeholder='Senha...' style={homeStyles.textInput}/>
      <Pressable style={homeStyles.button} onPress={() => navigation.navigate("Dashboard",{})}>
        <Text style={{color:'white', fontWeight:'bold'}}>Entrar</Text>
      </Pressable>
      <View style={homeStyles.hairline} />
      <Text style={homeStyles.text}>O que é o Crystal Blue?</Text>
      <Text style={homeStyles.contentText}>
        O Crystal Blue é um dashboard de acompanhamento de analise de vendas baseado em
        um seriado chamado "Breaking Bad".
      </Text>
      <Text style={homeStyles.contentText}>
        É possivel notar várias referencias ao longo da aplicação que remetem a certos elementos
        vistos no seriado. No momento, estamos em fase de testes, logo, não será possivel
        acessar todas as funções do sistema, porém, em breve atualizaremos!
      </Text>
      <View style={homeStyles.hairline} />
      </ScrollView>
    </View>
  );
}

