import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const ProfileCompleteScreen = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleComplete = () => {
    if (name && location) {
      router.replace('/home');
    } else {
      Alert.alert('Please fill all details');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Complete Your Profile</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        onChangeText={setName}
        value={name}
      />

      <TextInput
        placeholder="Location"
        style={styles.input}
        onChangeText={setLocation}
        value={location}
      />

      <TouchableOpacity style={styles.button} onPress={handleComplete}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366F1',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6366F1',
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
