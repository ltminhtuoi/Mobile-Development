import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const EmployeeDetail = ({ name, age, occupation }) => {
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Name: {name}</Text>
      <Text style={styles.detailText}>Age: {age}</Text>
      <Text style={styles.detailText}>Occupation: {occupation}</Text>
    </View>
  );
};

export default function EmployeeScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleUpdate = () => {
    if (!name || !age || !occupation) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }
    setSubmittedData({ name, age, occupation });
    Alert.alert("Success", "Employee information updated successfully!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Information Entry</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAge} />
      <TextInput style={styles.input} placeholder="Occupation Specialized in Training" value={occupation} onChangeText={setOccupation} />
      <Button title="Update Information" onPress={handleUpdate} />
      
      {submittedData && (
        <View>
          <Text style={styles.subTitle}>Current Employee Profile (Props Display):</Text>
          <EmployeeDetail name={submittedData.name} age={submittedData.age} occupation={submittedData.occupation} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginVertical: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  subTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 15, color: '#555' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4 },
  detailContainer: { marginTop: 10, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 4 },
  detailText: { fontSize: 14, marginVertical: 2 }
});