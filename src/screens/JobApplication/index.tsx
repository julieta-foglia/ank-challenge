import React from 'react';
import {JobApplicationForm} from '../../components';
import {Wrapper, Title, Subtitle} from './styled';

const JobApplication = ({route}) => (
  <Wrapper>
    <Subtitle>You're applying to</Subtitle>
    <Title>{route.params.job}</Title>
    <JobApplicationForm />
  </Wrapper>
);

export default JobApplication;
