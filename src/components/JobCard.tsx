import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  title: string;
  company: string;
  location: string;
  onSave: () => void;  // Important
  isSaved: boolean;
};

const JobCard = ({ title, company, location, onSave, isSaved }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.location}>{location}</Text>

      <TouchableOpacity style={styles.button} onPress={onSave}>
        <Text style={styles.buttonText}>
          {isSaved ? 'Unsave' : 'Save'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: '#555',
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
  button: {
    backgroundColor: '#6366F1',
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
