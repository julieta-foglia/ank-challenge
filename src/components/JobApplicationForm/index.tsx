import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import {Input, FormWrapper, ErrorText} from './styled';
import { Formik } from 'formik';
import { schema } from './validations';

const JobApplicationForm = () => (
    <Formik
    initialValues={{ name: 'Name', lastName: 'Last Name', email: 'email@ank.com', phone: '541112345678' }}
    onSubmit={values => console.log(values)}
    validationSchema={schema}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <FormWrapper>
        <Input
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />
        {errors.name && touched.name && <ErrorText>Invalid name</ErrorText>}
        <Input
          onChangeText={handleChange('lastName')}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
        />
        {errors.lastName && touched.lastName && <ErrorText>Invalid last name</ErrorText>}
        <Input
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        {errors.email && touched.email && <ErrorText>Invalid email</ErrorText>}
        <Input
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
          textContentType='telephoneNumber'
          keyboardType='number-pad'
        />
        {errors.phone && touched.phone && <ErrorText>Invalid phone</ErrorText>}
        <Button onPress={handleSubmit} title="Submit" />
      </FormWrapper>
    )}
  </Formik>
);

export default JobApplicationForm;
