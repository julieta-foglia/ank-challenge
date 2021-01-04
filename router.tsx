import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import JobDescription from './src/screens/JobDescription';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Homee',
        }}
      />
      <Stack.Screen
        name="JobDescription"
        component={JobDescription}
        options={{
          title: 'Job Description',
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
