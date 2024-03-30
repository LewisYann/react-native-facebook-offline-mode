import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreatePost from 'screens/CreatePost';
import HomeScreen from 'screens/Home';
import {useOfflineActionQueue} from 'hooks/useQueuingAction';
import Screens from 'constants/Screens';
import {defaultStackNavOptions} from 'configs/navigation';
import {useNetworkStatus} from 'hooks/useNetworkStatus';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Login: unknown;
  Home: unknown;
};

export const UserNavigator = () => {
  const isConnected = useNetworkStatus();

  const {dispatchAllAction} = useOfflineActionQueue();

  useEffect(() => {
    if (isConnected) {
      dispatchAllAction();
    }
  }, [isConnected]);

  return (
    <Stack.Navigator screenOptions={defaultStackNavOptions}>
      <Stack.Screen
        name={Screens.home}
        options={{headerShown: false, headerTransparent: true}}
        component={HomeScreen}
      />
      <Stack.Screen
        name={Screens.createPost}
        options={{
          headerShown: true,
          presentation: 'modal',
          title: 'Créer une publication',
        }}
        component={CreatePost}
      />
    </Stack.Navigator>
  );
};
