import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Rooms from './pages/Rooms/Rooms'

const client = new ApolloClient({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

export const App = () => {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rooms" screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="Rooms" component={Rooms} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )

}

export default App;

AppRegistry.registerComponent('MyApplication', () => App);