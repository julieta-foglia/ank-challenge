import React from 'react';
import { JobsComponent } from '../../components';

const JobDescription = ({ route }) => {
  return <JobsComponent jobs={route.params.jobs}/>;
};

export default JobDescription;
