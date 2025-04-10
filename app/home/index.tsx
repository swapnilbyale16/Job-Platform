import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../src/firebase/config';
import JobCard from '../../src/components/JobCard';
import { useLocalSearchParams } from 'expo-router';

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
};

const HomeScreen = ({ handleSaveJob, savedJobs }: any) => {

  const savedJobIds = typeof savedJobs === 'string' ? savedJobs.split(',') : savedJobs || [];

  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchJobs = async () => {
    const querySnapshot = await getDocs(collection(db, 'jobs'));
    const jobList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Job[];
    setJobs(jobList);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Latest Jobs</Text>

      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            onSave={() => handleSaveJob && handleSaveJob(job.id)}
            isSaved={savedJobIds.includes(job.id)}
          />
        ))
      ) : (
        <Text>No Jobs Available</Text>
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6366F1',
  },
});
