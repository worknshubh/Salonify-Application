import React from 'react';
import { View, Text } from 'react-native';
import Home from './screens/home';
import Drawermenu from './screens/Drawer';
import Userlogin from './screens/login';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Userlogin}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="drawer"
          component={Drawermenu}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
