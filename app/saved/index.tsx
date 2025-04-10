import React from 'react';
import { useLocalSearchParams } from 'expo-router';
import SavedJobsScreen from '../../src/screens/SavedJobsScreen.js';

const Saved = () => {
  const { savedJobs, jobs, handleSaveJob } = useLocalSearchParams();

  return (
    <SavedJobsScreen
      savedJobs={savedJobs}
      jobs={jobs}
      handleSaveJob={handleSaveJob}
    />
  );
};

export default Saved;
