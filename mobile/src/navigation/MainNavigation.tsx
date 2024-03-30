import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {UserNavigator} from './stacks/UserNavigation';
import {AuthNavigator} from './stacks/AuthNavigation';
import {useSelector} from 'react-redux';
import {RootState} from 'store';

export default function MainNavigator() {
  const account = useSelector((state: RootState) => state.auth.account);

  const defaultNavigator = account?.username ? (
    <UserNavigator />
  ) : (
    <AuthNavigator />
  );

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {defaultNavigator}
    </NavigationContainer>
  );
}
