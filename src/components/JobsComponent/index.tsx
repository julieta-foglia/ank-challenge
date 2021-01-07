import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {JobListItem, List} from '../../components';
import {Title} from './styled';
import { JobItem } from 'types/jobItem';

interface JobsComponentProps {
  jobs: JobItem[];
  company?: string;
}

const JobsComponent: React.FC<JobsComponentProps> = ({jobs, company}: JobsComponentProps) => {
  const navigation = useNavigation();

  const renderItem = (item: JobItem) => (
    <JobListItem
      id={item.id}
      title={item.title}
      cities={item.cities}
      countries={item.countries}
      commitment={item.commitment.title}
      remote={item.remotes}
      onPress={() =>
        navigation.navigate('Job Application', {
          job: item.title,
        })
      }
    />
  );

  return (
    <>
      <Title>Jobs for {company}</Title>
      <List data={jobs} renderItem={renderItem} />
    </>
    );
};

export default JobsComponent;
