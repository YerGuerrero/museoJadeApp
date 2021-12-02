import React from 'react';
import Tours from './pages/tours';
import Tour from './pages/tour';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './pages/home';

export default  function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
          />
        <Stack.Screen
            name="Tours"
            component={Tours}
          />
        <Stack.Screen
            name="Tour"
            component={Tour}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


