import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import { style } from './styles'

export const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataProducts = await fetch('http://localhost:5001/product');
        const fetchedData = await dataProducts.json();
        setProduct(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return (
    <View style={style.container}>
      <FlatList
        style={style.listContainer}
        data={product}
        renderItem={
          ({ item }) =>
            <View style={style.productContainer}>
              <Image
                style={style.productImage}
                source={{ uri: item.src }}
              />
              <Text>{item.name}</Text>
              <Text>{item.description}</Text>
              <Text>{item.price}</Text>
            </View>
        }
      />
    </View>
  )
}
