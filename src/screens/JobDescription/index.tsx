import React from 'react';
import {JobsComponent} from '../../components';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'types/stackParams';

type JobDescriptionScreenRouteProp = RouteProp<RootStackParamList, 'JobDescription'>;

type JobApplicationProps = {
  route: JobDescriptionScreenRouteProp;
};

const JobDescription: React.FC<JobApplicationProps> = ({route}: JobApplicationProps) => {
  return <JobsComponent jobs={route.params.jobs} company={route.params.company} />;
};

export default JobDescription;
