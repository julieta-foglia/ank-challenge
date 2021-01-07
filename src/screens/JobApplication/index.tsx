import React from 'react';
import {JobApplicationForm} from '../../components';
import {Wrapper, Title, Subtitle} from './styled';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from 'types/stackParams';

type JobApplicationScreenRouteProp = RouteProp<RootStackParamList, 'JobApplication'>;

type JobApplicationProps = {
  route: JobApplicationScreenRouteProp;
};

const JobApplication: React.FC<JobApplicationProps> = ({route}: JobApplicationProps) => (
  <Wrapper>
    <Subtitle>You're applying to</Subtitle>
    <Title>{route.params.job}</Title>
    <JobApplicationForm />
  </Wrapper>
);

export default JobApplication;
