import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import JobCard from '../components/JobCard';

const SavedJobsScreen = ({ savedJobs, jobs, handleSaveJob }) => {
  const savedJobIds = Array.isArray(savedJobs) ? savedJobs : [];

  const filteredJobs = (jobs || []).filter((job) =>
    savedJobIds.includes(job.id)
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Saved Jobs</Text>

      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            onSave={() => handleSaveJob(job.id)}
            isSaved={true}
          />
        ))
      ) : (
        <Text>No Saved Jobs Found</Text>
      )}
    </ScrollView>
  );
};

export default SavedJobsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f3f4f6',
    minHeight: '100%',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#9333ea',
  },
});
