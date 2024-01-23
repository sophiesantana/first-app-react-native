import { View, Text, Image, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import { style } from './styles';

export const Header = () => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: 'https://github.com/sophiesantana.png'
        }}
        style={style.images}
      />
      <View style={style.infoUser}>
        <Text style={style.welcomeUser}>Olá,</Text>
        <Text style={style.nameUser}>Sophie Santana</Text>
      </View>
      <Pressable
        style={style.searchBtn}
        onPress={() => Alert.alert('Pesquisar', 'Clicou em pesquisar')}
      >
        <Ionicons name="fast-food" size={40} color="black" />
      </Pressable>
    </View>
  )
}
