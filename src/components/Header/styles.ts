import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    height: 100,
    padding: 20,
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  images: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  infoUser: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeUser: {
    color: '#888'
  },
  nameUser: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black'
  },
  searchBtn: {
    padding: 10,
    borderRadius: 50
  }
})