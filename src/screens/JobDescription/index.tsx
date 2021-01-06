import React from 'react';
import {JobsComponent} from '../../components';

const JobDescription = ({route}) => {
  return <JobsComponent jobs={route.params.jobs} company={route.params.company} />;
};

export default JobDescription;
