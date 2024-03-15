import {View} from 'native-base';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View
        justifyContent="center"
        alignItems="center"
        h="full"
        flexDirection="column">
        <Text> React native app </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
