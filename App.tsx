import 'react-native-gesture-handler';
import React from 'react';

import {ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './router';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
          <StackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};



export default App;
