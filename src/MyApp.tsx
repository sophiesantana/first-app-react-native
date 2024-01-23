import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { Routes } from './routes';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

export default function MyApp() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <SearchBar />
        <Routes />
      </View>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCB40'
  }
})