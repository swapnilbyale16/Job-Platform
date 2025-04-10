import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'React', jobs: 20 },
  { name: 'Node.js', jobs: 15 },
  { name: 'UI/UX', jobs: 10 },
  { name: 'Backend', jobs: 12 },
];

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Analytics</Text>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="jobs" fill="#6366F1" />
        </BarChart>
      </ResponsiveContainer>
    </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6366F1',
  },
});
