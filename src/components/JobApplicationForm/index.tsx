import React, { useState } from 'react';
import { Text } from 'react-native';
import {Input, FormWrapper} from './styled';
import { Formik } from 'formik';
import { schema } from './validations';

const JobApplicationForm = () => {
  const [name, setName] = useState('Name');
  const [lastName, setLastName] = useState('LastName');

  return (
    <Formik
     initialValues={{ name: '' }}
     onSubmit={values => console.log(values)}
     validationSchema={schema}
   > {({ setFieldValue, handleBlur, handleSubmit, values, errors, touched }) =>
   (
   <FormWrapper>
      <Input 
        onChangeText={() => setFieldValue('name', values.name)}
        onBlur={handleBlur('name')}
        value={values.name}
      />
      {errors.name && touched.name && (
        <Text>
          {errors.name}
        </Text>
      )}
          
    </FormWrapper>
    )}
    </Formik>
   )
}

export default JobApplicationForm;
