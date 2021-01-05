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
        headerStyle: {backgroundColor: '#F5774C'},
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Jobs"
        component={JobDescription}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
