import React from 'react';

import Home from './Home';
import Drawer from './Drawer';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

let i=0;
export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
          options={{headerShown:false}}
          />
          <Stack.Screen name="Drawer" component={Drawer} 
          options={{title:null}}
          
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


