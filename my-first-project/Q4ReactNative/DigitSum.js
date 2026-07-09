import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DigitSum() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    if (!number) return;
    const cleanNum = Math.abs(parseInt(number, 10)).toString();
    const firstDigit = parseInt(cleanNum[0], 10);
    const lastDigit = parseInt(cleanNum[cleanNum.length - 1], 10);
    setResult(firstDigit + lastDigit);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sum First & Last Digit</Text>
      <TextInput style={styles.input} placeholder="Enter a number" keyboardType="numeric" value={number} onChangeText={setNumber} />
      <Button title="Calculate Sum" onPress={calculateSum} />
      {result !== null && <Text style={styles.result}>Sum result: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginVertical: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4 },
  result: { fontSize: 16, fontWeight: 'bold', marginTop: 10, color: 'blue' }
});