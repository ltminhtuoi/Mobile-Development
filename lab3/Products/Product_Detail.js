import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function ProductDetail() {
  const [data, setData] = useState(null);
  const filePath = 'https://dummyjson.com/products/2';

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((d) => setData(d))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!data) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Detail</Text>
      <Card>
        <Card.Cover source={{ uri: data.thumbnail }} />
        <Card.Content style={styles.cardContent}>
          <Text variant="headlineMedium" style={styles.title}>Title: {data.title}</Text>
          <Text>Description: {data.description}</Text>
          <Text>Price: ${data.price}</Text>
          <Text>Discount: {data.discountPercentage}%</Text>
          <Text>Rating: {data.rating} stars</Text>
          <Text>Stock: {data.stock} units</Text>
          <Text>Brand: {data.brand}</Text>
          <Text>Category: {data.category}</Text>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button mode="contained" style={styles.btn}>Delete</Button>
          <Button mode="contained" style={styles.btn}>Cancel</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#fff' },
  header: { fontSize: 18, color: '#555', marginBottom: 10 },
  cardContent: { paddingTop: 10 },
  title: { fontWeight: 'bold', marginVertical: 8 },
  actions: { justifyContent: 'flex-end', paddingBottom: 15 },
  btn: { backgroundColor: '#673AB7', marginLeft: 10, borderRadius: 20 }
});