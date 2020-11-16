// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
            title:'Döviz / Altın',
            headerStyle:{
                backgroundColor:'#181716'
            },
            headerTitleStyle:{
                color:'white',

                fontWeight:'bold'
            }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;