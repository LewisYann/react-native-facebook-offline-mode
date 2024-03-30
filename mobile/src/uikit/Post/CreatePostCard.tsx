import React from 'react';
import {Avatar, Flex, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'navigation/stacks/UserNavigation';
import Screens from 'constants/Screens';

const CreatePostCard = () => {
  const navigation = useNavigation<RootStackParamList>();

  const onOpen = () => {
    navigation.navigate(Screens.createPost);
  };

  return (
    <>
      <Flex
        bgColor="white"
        px="3"
        py="3"
        flexDirection="row"
        alignItems="center">
        <Flex w="15%">
          <Avatar mr="1" />
        </Flex>
        <TouchableOpacity onPress={onOpen} style={{width: '80%'}}>
          <Text>What's news ?</Text>
        </TouchableOpacity>
      </Flex>
    </>
  );
};

export default CreatePostCard;
