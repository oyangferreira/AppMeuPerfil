import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function App() {
  let nome = 'Yang Sarmento Ferreira';
  let cpf = '557.506.818-82';
  let formacao = 'Analista e Desenvolvedor de Sistemas';
  let experiencia = 'Professor de Informática';
  let projetos = 'Brain Help e Turismo app';
  let img = require('./assets/perfil.jpeg');

  return ( 
    <View style={styles.container}>
      <View style={styles.imagemContainer}>
        <Image source={img} style={styles.imagem} />
      </View>

      <Text style={styles.titulo}>Dados Pessoais</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>CPF: {cpf}</Text>
      
      <Text style={styles.titulo}>Formação</Text>
      <Text style={styles.texto}>{formacao}</Text>
      
      <Text style={styles.titulo}>Experiência</Text>
      <Text style={styles.texto}>{experiencia}</Text>
      
      <Text style={styles.titulo}>Projetos</Text>
      <Text style={styles.texto}>{projetos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imagemContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  imagem: {
    width: 120,
    height: 120,
  },
  titulo: {
    color: '#FF0000',
    fontSize: 18,
    marginVertical: 10,
  },
  texto: {
    marginVertical: 10,
  },
});

export default App;