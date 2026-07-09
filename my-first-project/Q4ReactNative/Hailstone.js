import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function Hailstone() {
  const [inputVal, setInputVal] = useState('');
  const [sequence, setSequence] = useState([]);

  const generateSequence = () => {
    let n = parseInt(inputVal, 10);
    if (isNaN(n) || n <= 0) return;

    const seq = [n];
    while (n > 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1; 
      }
      seq.push(n); 
    }
    setSequence(seq);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hailstone Sequence Generator</Text>
      <TextInput style={styles.input} placeholder="Enter positive integer (n > 0)" keyboardType="numeric" value={inputVal} onChangeText={setInputVal} />
      <Button title="Generate Sequence" onPress={generateSequence} />
      
      {sequence.length > 0 && (
        <ScrollView style={styles.resultScroll}>
          <Text style={styles.resultText}>Sequence: {sequence.join(' ➔ ')}</Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginVertical: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4 },
  resultScroll: { marginTop: 10, maxHeight: 120, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 4 },
  resultText: { fontSize: 14, color: '#333', lineHeight: 20 }
});