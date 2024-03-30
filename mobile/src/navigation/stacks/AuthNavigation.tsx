import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'screens/Login';
import {defaultStackNavOptions} from 'configs/navigation';
import Screens from 'constants/Screens';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen name={Screens.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};
