import { View, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { style } from './styles';

export const SearchBar = () => {
  return (
    <View style={style.container}>
      <Ionicons name="search" size={24} color="black" />
      <TextInput
        style={style.input}
        placeholder='digite aqui...'
      />
      <Fontisto name="equalizer" size={24} color="black" />
    </View>
  )
}
