import React from 'react';
import {Alert} from 'react-native';
import {
  Input,
  FormWrapper,
  ErrorText,
  SubmitButton,
  ButtonWrapper,
} from './styled';
import {Formik} from 'formik';
import {schema} from './validations';
import {useNavigation} from '@react-navigation/native';

const JobApplicationForm: React.FC = () => {
  const navigation = useNavigation();

  const handleSubmit = (): void => {
    Alert.alert(
      'Application Sent',
      'Your application was sent successfully',
      [{text: 'OK', onPress: () => navigation.navigate('Home')}],
      {cancelable: false},
    );
  };

  return (
    <Formik
      initialValues={{name: '', lastName: '', email: '', phone: ''}}
      onSubmit={() => handleSubmit()}
      validationSchema={schema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <FormWrapper>
          <Input
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Name (required)"
          />
          {errors.name && touched.name && <ErrorText>Invalid name</ErrorText>}
          <Input
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            placeholder="Last Name (required)"
          />
          {errors.lastName && touched.lastName && (
            <ErrorText>Invalid last name</ErrorText>
          )}
          <Input
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="email@ank.com (required)"
          />
          {errors.email && touched.email && (
            <ErrorText>Invalid email</ErrorText>
          )}
          <Input
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            textContentType="telephoneNumber"
            keyboardType="number-pad"
            placeholder="541112345678 (required)"
          />
          {errors.phone && touched.phone && (
            <ErrorText>Invalid phone</ErrorText>
          )}
          <ButtonWrapper>
            <SubmitButton color="white" onPress={handleSubmit} title="Submit" />
          </ButtonWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default JobApplicationForm;
