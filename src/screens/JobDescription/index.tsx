import React from 'react';
import { JobCard } from '../../components';

const JobDescription = ({ route }) => {
  return <JobCard jobs={route.params.jobs}/>;
};

export default JobDescription;
