import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {UserNavigator} from './stacks/UserNavigation';
import {AuthNavigator} from './stacks/AuthNavigation';
import {useSelector} from 'react-redux';
import {RootState} from 'store';
import NetInfo from '@react-native-community/netinfo';
import {BACKEND_URL} from 'constants/all';

NetInfo.configure({
  reachabilityUrl: BACKEND_URL,
  reachabilityTest: async response => response.status === 404,
  reachabilityLongTimeout: 5 * 1000,
  reachabilityShortTimeout: 1 * 1000,
  reachabilityRequestTimeout: 15 * 1000,
  reachabilityShouldRun: () => true,
  shouldFetchWiFiSSID: true,
  useNativeReachability: false,
});

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
