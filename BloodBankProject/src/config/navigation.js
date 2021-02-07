import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Donor from '../screens/Donor';


const Stack = createStackNavigator();

function AppNavigation(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} />
        <Stack.Screen name="Donor" component={Donor} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

  
export default AppNavigation;
