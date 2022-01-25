import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Rooms from './pages/Rooms/Rooms';
//@ts-ignore
import { TOKEN } from '@env';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${TOKEN}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const Stack = createNativeStackNavigator();

export const App = () => {

  console.log(TOKEN)

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