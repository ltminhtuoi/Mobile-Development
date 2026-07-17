import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Text } from 'react-native-paper';

export default function ProductSearch() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  const searchProduct = () => {
    if (value !== '') {
      const filePath = 'https://dummyjson.com/products/search?q=' + value;
      fetch(filePath)
        .then((response) => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then((d) => setData(d.products))
        .catch((error) => console.error('Error fetching data:', error));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Products</Text>
      
      <TextInput value={value} onChangeText={setValue} placeholder="iphone" style={styles.input} />
      <Button mode="contained" onPress={searchProduct} style={styles.searchBtn}>SEARCH</Button>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.subHeader}>Product Detail</Text>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.thumbnail }} style={styles.cardCover} />
              <Card.Content style={styles.cardContent}>
                <Text style={styles.title}>Title: {item.title}</Text>
                <Text style={styles.detailText}>Description: {item.description}</Text>
                <Text style={styles.detailText}>Price: ${item.price}</Text>
                <Text style={styles.detailText}>Discount: {item.discountPercentage}%</Text>
                <Text style={styles.detailText}>Rating: {item.rating} stars</Text>
                <Text style={styles.detailText}>Stock: {item.stock} units</Text>
                <Text style={styles.detailText}>Brand: {item.brand}</Text>
                <Text style={styles.detailText}>Category: {item.category}</Text>
              </Card.Content>
            </Card>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', color: '#777', marginBottom: 10 }, 
  subHeader: { fontSize: 16, marginVertical: 8, color: '#333' },
  input: { backgroundColor: '#fff', marginBottom: 10 },
  searchBtn: { backgroundColor: '#2196F3', borderRadius: 2, marginBottom: 15 },
  card: { backgroundColor: '#fff', elevation: 2, borderRadius: 8, overflow: 'hidden' },
  cardCover: { height: 180 },
  cardContent: { paddingTop: 15 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 5, color: '#333' },
  detailText: { fontSize: 14, color: '#555', marginVertical: 1 }
});