import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ConditionPage, HomePage} from './pages'
const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Condition" component={ConditionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;