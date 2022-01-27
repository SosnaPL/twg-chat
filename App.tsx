import React from 'react';
import { AppRegistry } from 'react-native';
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
import Room from './pages/Room/Room';
//@ts-ignore
import { TOKEN } from '@env'; //Declaration of module in global.d.ts didn't fix the issue that's why ts ignore was used

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
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Rooms" screenOptions={{
          headerShown: false
        }} >
          <Stack.Screen name="Rooms" component={Rooms} />
          <Stack.Screen name="Room" component={Room} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )

}

export default App;

AppRegistry.registerComponent('MyApplication', () => App);