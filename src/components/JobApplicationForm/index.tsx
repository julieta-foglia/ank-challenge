import React, { useState } from 'react';
import { TextInput } from 'react-native';
import {ItemWrapper, TitleWrapper, Title, Subtitle, LogoImage} from './styled';

const JobApplicationForm = () => {
  const [name, setName] = useState('Name');

  return (
    <TextInput value={name} />
  );
}

export default JobApplicationForm;
