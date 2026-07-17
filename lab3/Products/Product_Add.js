import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert, View, TextInput } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Product_Add() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title, description, price, discountPercentage, rating, stock, brand, category, images
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Alert.alert("Add successful");
      })
      .catch((err) => console.error(err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Add a Product</Text>
      
      <Text style={styles.label}>Title</Text>
      <TextInput 
        placeholder="Enter title" 
        placeholderTextColor="#888"
        value={title} 
        onChangeText={setTitle} 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Description</Text>
      <TextInput 
        placeholder="Enter description" 
        placeholderTextColor="#888"
        value={description} 
        onChangeText={setDescription} 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Price</Text>
      <TextInput 
        placeholder="Enter price" 
        placeholderTextColor="#888"
        value={price} 
        onChangeText={setPrice} 
        keyboardType="numeric" 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Discount Percentage</Text>
      <TextInput 
        placeholder="Enter discount percentage" 
        placeholderTextColor="#888"
        value={discountPercentage} 
        onChangeText={setDiscountPercentage} 
        keyboardType="numeric" 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Rating</Text>
      <TextInput 
        placeholder="Enter rating" 
        placeholderTextColor="#888"
        value={rating} 
        onChangeText={setRating} 
        keyboardType="numeric" 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Stock</Text>
      <TextInput 
        placeholder="Enter stock" 
        placeholderTextColor="#888"
        value={stock} 
        onChangeText={setStock} 
        keyboardType="numeric" 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Brand</Text>
      <TextInput 
        placeholder="Enter brand" 
        placeholderTextColor="#888"
        value={brand} 
        onChangeText={setBrand} 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Category</Text>
      <TextInput 
        placeholder="Enter category" 
        placeholderTextColor="#888"
        value={category} 
        onChangeText={setCategory} 
        style={styles.input} 
      />
      
      <Text style={styles.label}>Images</Text>
      <TextInput 
        placeholder="Enter images URL(s)" 
        placeholderTextColor="#888"
        value={images} 
        onChangeText={setImages} 
        style={styles.input} 
      />
      
      <Button mode="contained" onPress={handleSubmit} style={styles.btn}>
        SUBMIT
      </Button>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15, paddingTop: 15, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', color: '#1a53ff', marginBottom: 15 }, // Extremely bright, vibrant blue
  label: { fontWeight: 'bold', marginTop: 10, color: '#333' },
  input: { 
    height: 40, 
    paddingHorizontal: 0,
    fontSize: 16,
    color: '#333',
    borderWidth: 0, 
    marginVertical: 5,
  },
  btn: { backgroundColor: '#2196F3', borderRadius: 2, marginVertical: 20 },
});