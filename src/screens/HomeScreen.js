import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const data = [
      { id: '1', title: 'React Developer' },
      { id: '2', title: 'Node.js Developer' },
    ];
    setJobs(data);
  };

  const handleSaveJob = (job) => {
    const isJobSaved = savedJobs.find((item) => item.id === job.id);
    if (!isJobSaved) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  return (
    <View>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <JobCard job={item} onSave={() => handleSaveJob(item)} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
