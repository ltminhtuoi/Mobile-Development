import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';

export default function ProductList() {
  const [data, setData] = useState([]);
  const filePath = 'https://dummyjson.com/products/';

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((d) => setData(d.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View style={styles.info}>
          <Text variant="titleMedium">**Title:** {item.title}</Text>
          <Text numberOfLines={3}>**Description:** {item.description}</Text>
          <Text>**Price:** {item.price}</Text>
          <Text style={styles.discount}>**Discount:** {item.discountPercentage}% off</Text>
          <Text>**Rating:** {item.rating}</Text>
          <Text>**Stock:** {item.stock}</Text>
          <Text>**Brand:** {item.brand}</Text>
          <Text>**Category:** {item.category}</Text>
          
          <View style={styles.buttonRow}>
            <Button mode="contained" compact style={styles.btn}>DETAIL</Button>
            <Button mode="contained" compact style={styles.btn}>ADD</Button>
            <Button mode="contained" compact style={styles.btn}>DELETE</Button>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product list</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginVertical: 10, color: '#777' },
  card: { padding: 10, marginBottom: 15, backgroundColor: '#f9f9f9' },
  row: { flexDirection: 'row' },
  image: { width: 80, height: 80, marginRight: 10, borderRadius: 5 },
  info: { flex: 1 },
  discount: { color: 'green' },
  buttonRow: { flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' },
  btn: { backgroundColor: '#2196F3', borderRadius: 2 },
});