/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, Alert } from 'react-native'; 
import data from './Data';
import Square from './Square';
import styles from "./style";


const EmployeeDetail = ({ name, age, occupation }: { name: string; age: string; occupation: string }) => {
  return (
    <View style={{ marginTop: 10, padding: 10, backgroundColor: '#f3f4f6', borderRadius: 6, borderWidth: 1, borderColor: '#e5e7eb' }}>
      <Text style={{ fontSize: 14, color: '#1f2937' }}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {name}</Text>
      <Text style={{ fontSize: 14, color: '#1f2937', marginVertical: 2 }}><Text style={{ fontWeight: 'bold' }}>Age:</Text> {age}</Text>
      <Text style={{ fontSize: 14, color: '#1f2937' }}><Text style={{ fontWeight: 'bold' }}>Occupation:</Text> {occupation}</Text>
    </View>
  );
};

function EmployeeAndDigitSection() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [submittedData, setSubmittedData] = useState<any>(null);

  const [number, setNumber] = useState('');
  const [sumResult, setSumResult] = useState<number | null>(null);

  const handleUpdate = () => {
    if (!name || !age || !occupation) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }
    setSubmittedData({ name, age, occupation });
    Alert.alert("Success", "Employee information updated successfully!");
  };

  const calculateSum = () => {
    if (!number) return;
    const cleanNum = Math.abs(parseInt(number, 10)).toString();
    const firstDigit = parseInt(cleanNum[0], 10);
    const lastDigit = parseInt(cleanNum[cleanNum.length - 1], 10);
    setSumResult(firstDigit + lastDigit);
  };

  return (
    <View style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#4F46E5' }}>1a. Employee Information Entry</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 8, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAge} />
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Occupation Specialized in Training" value={occupation} onChangeText={setOccupation} />
      <Button title="Update Information" onPress={handleUpdate} color="#4F46E5" />
      
      {submittedData && (
        <View>
          <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 12, color: '#4b5563' }}>Current Employee Profile (Props Display):</Text>
          <EmployeeDetail name={submittedData.name} age={submittedData.age} occupation={submittedData.occupation} />
        </View>
      )}

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 25, marginBottom: 10, color: '#4F46E5' }}>1b. Sum First & Last Digit</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Enter a number" keyboardType="numeric" value={number} onChangeText={setNumber} />
      <Button title="Calculate Sum" onPress={calculateSum} color="#4F46E5" />
      {sumResult !== null && <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10, color: 'blue' }}>Sum result: {sumResult}</Text>}
    </View>
  );
}

function MinNumberSection() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [minVal, setMinVal] = useState<number | null>(null);

  const findMinimum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) return;
    setMinVal(Math.min(n1, n2, n3));
  };

  return (
    <View style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#059669' }}>2. Find Minimum of Three Numbers</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 6, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Number 1" keyboardType="numeric" value={num1} onChangeText={setNum1} />
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 6, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Number 2" keyboardType="numeric" value={num2} onChangeText={setNum2} />
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Number 3" keyboardType="numeric" value={num3} onChangeText={setNum3} />
      <Button title="Find Minimum" onPress={findMinimum} color="#059669" />
      {minVal !== null && <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10, color: 'green' }}>Minimum value is: {minVal}</Text>}
    </View>
  );
}

function HailstoneSection() {
  const [inputVal, setInputVal] = useState('');
  const [sequence, setSequence] = useState<number[]>([]);

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
    <View style={{ padding: 15, marginBottom: 40 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#DC2626' }}>3. Hailstone Sequence Generator</Text>
      <TextInput style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4, backgroundColor: '#fff' }} placeholder="Enter positive integer (n > 0)" keyboardType="numeric" value={inputVal} onChangeText={setInputVal} />
      <Button title="Generate Sequence" onPress={generateSequence} color="#DC2626" />
      {sequence.length > 0 && (
        <View style={{ marginTop: 10, backgroundColor: '#fef2f2', padding: 10, borderRadius: 4, borderWidth: 1, borderColor: '#fee2e2' }}>
          <Text style={{ fontSize: 14, color: '#991b1b', lineHeight: 20 }}><Text style={{ fontWeight: 'bold' }}>Sequence:</Text> {sequence.join(' ➔ ')}</Text>
        </View>
      )}
    </View>
  );
}


function App() {
  return (
    <ScrollView style={styles.container}>
      
      {/* --- QUESTION 4 LAYOUT */}
      <Text style={{ fontSize: 14, color: '#888', marginVertical: 10, textAlign: 'center', fontWeight: 'bold' }}>--- Question 4 Layout ---</Text>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}

      {/* --- QUESTION 6*/}
      <View style={{ height: 10, backgroundColor: '#e5e7eb', marginVertical: 25 }} />
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 15, color: '#111827' }}>Question 6 Features</Text>
      
      <EmployeeAndDigitSection />
      <MinNumberSection />
      <HailstoneSection />

    </ScrollView>
  );
}

export default App;