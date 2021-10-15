import React from 'react';
import List from './src/pages/list';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewDetails from './src/pages/viewDetails';

const APP = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main screen" component={List} />
        <Stack.Screen name="View Details" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default APP;
