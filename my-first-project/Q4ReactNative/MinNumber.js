import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function MinNumber() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [minVal, setMinVal] = useState(null);

  const findMinimum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (isNaN(n1) || PisNaN(n2) || isNaN(n3)) return;
    setMinVal(Math.min(n1, n2, n3));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Minimum of Three Numbers</Text>
      <TextInput style={styles.input} placeholder="Number 1" keyboardType="numeric" value={num1} onChangeText={setNum1} />
      <TextInput style={styles.input} placeholder="Number 2" keyboardType="numeric" value={num2} onChangeText={setNum2} />
      <TextInput style={styles.input} placeholder="Number 3" keyboardType="numeric" value={num3} onChangeText={setNum3} />
      <Button title="Find Minimum" onPress={findMinimum} />
      {minVal !== null && <Text style={styles.result}>Minimum value is: {minVal}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginVertical: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4 },
  result: { fontSize: 16, fontWeight: 'bold', marginTop: 10, color: 'green' }
});