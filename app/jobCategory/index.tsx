import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const categories = ['Frontend', 'Backend', 'Fullstack', 'UI/UX', 'Data Science'];

const JobCategoryScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Your Job Category</Text>

      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push('/expertise')}
        >
          <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default JobCategoryScreen;

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
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
  },
});
