import React from 'react';
import { Text } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import JobDescription from './src/screens/JobDescription';
import JobApplication from './src/screens/JobApplication';
import FavedJobs from './src/screens/FavedJobs';
import HeaderRight from './src/components/HeaderRight';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#F5774C'},
        headerRight: () => (
          <HeaderRight title="Favs" navigateTo="Faved Jobs" />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Jobs"
        component={JobDescription}
      />
      <Stack.Screen
        name="Job Application"
        component={JobApplication}
      />
      <Stack.Screen
        name="Faved Jobs"
        component={FavedJobs}
        options={{ headerRight: null }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
