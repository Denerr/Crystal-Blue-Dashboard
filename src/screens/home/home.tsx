import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import homeStyles from './style';

export default function Home() {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const cadastro = () =>{
    if(usuario != "" && senha != ""){
      alert('Bem Vindo Sr(a) '+(usuario))
    }else if(usuario != "" && senha == ""){
      alert('Preencha a Senha!')
    }else{
      alert('Preencha o Usuário!')
    }
  }
  return (
    <View style={homeStyles.container}>
      <StatusBar hidden/>
      <ScrollView>
      <Text style={homeStyles.titleText}>Crystal Blue</Text>
      <ImageBackground  source={require('../../images/breaking_bad_bg2.jpg')} style={homeStyles.image}/>
      <TextInput placeholder='Usuario...' style={homeStyles.textInput} onChangeText={text=>setUsuario(text)} />
      <TextInput secureTextEntry={true} placeholder='Senha...' style={homeStyles.textInput} onChangeText={text=>setSenha(text)} />
      <Pressable style={homeStyles.button} onPress={cadastro}>
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

