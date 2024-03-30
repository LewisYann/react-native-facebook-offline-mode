import React, {useState} from 'react';
import {
  Avatar,
  Button,
  Flex,
  KeyboardAvoidingView,
  Text,
  TextArea,
} from 'native-base';
import {SafeAreaView} from 'react-native';
import {usePostPostsMutation} from 'generated/post';
import {usePostUsersMutation} from 'generated/user';
import {useNavigation} from '@react-navigation/native';

const CreatePost = () => {
  const [createPost, {isLoading}] = usePostPostsMutation();
  const navigation = useNavigation();
  const [, {}] = usePostUsersMutation();
  const [text, setText] = useState('');

  const onSubmitPost = async () => {
    try {
      await createPost({postRequest: {data: {description: text}}});
      setText('');
      navigation.canGoBack() && navigation.goBack();
    } catch {}
  };
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Flex bgColor="white" p="4">
          <Flex alignItems="center" flexDirection="row">
            <Avatar />
            <Text ml="2" fontWeight="bold">
              ALLEJI LEWIS
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <TextArea
            h="70%"
            borderWidth={0}
            placeholder="Quoi de neuf ?"
            bgColor="white"
            fontSize="md"
            _focus={{
              bgColor: 'white',
            }}
            onChangeText={textValue => setText(textValue)}
            autoCompleteType={undefined}
          />
        </Flex>
        <Button
          alignSelf="center"
          w="95%"
          bottom="20%"
          position="absolute"
          onPress={onSubmitPost}
          isLoading={isLoading}
          color="red">
          Publier
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreatePost;
