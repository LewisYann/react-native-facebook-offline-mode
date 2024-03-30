import React, {useState} from 'react';
import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Stack,
  useToast,
} from 'native-base';
import {SafeAreaView} from 'react-native';
import {usePostAuthLocalMutation} from 'generated/authentication';
import {useDispatch} from 'react-redux';
import authSlice from 'store/slices/auth';
import {getErrorMessage} from 'utils/helpers';

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [loginMutation, {isLoading}] = usePostAuthLocalMutation();
  const toast = useToast();
  const dispatch = useDispatch();
  const handleFormChange = (value: string, field: string) => {
    setFormData({...formData, [field]: value});
  };

  const onLogin = async () => {
    try {
      const data = await loginMutation({
        body: formData,
      }).unwrap();
      if (data) {
        console.log(data);
        dispatch(authSlice.actions.setAccount({account: data.user}));
        dispatch(
          authSlice.actions.setAuthTokens({
            token: data.jwt,
          }),
        );
        toast.show({
          title: 'You are connected',
        });
      }
    } catch (err) {
      toast.show({
        title: 'Error',
        description: getErrorMessage(err),
      });
    }
  };
  return (
    <SafeAreaView>
      <Center mx="8" h="full">
        <Heading mb="4" fontSize="3xl">
          FaceOfBook
        </Heading>
        <FormControl>
          <Stack space={5}>
            <Stack>
              <FormControl.Label>E-mail</FormControl.Label>
              <Input
                onChangeText={text => handleFormChange(text, 'identifier')}
                isRequired
                placeholder="Username"
              />
            </Stack>
            <Stack>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                onChangeText={text => handleFormChange(text, 'password')}
                isRequired
                type="password"
                placeholder="Password"
              />
            </Stack>
            <Stack mt="2">
              <Button isLoading={isLoading} onPress={onLogin}>
                Login
              </Button>
            </Stack>
          </Stack>
        </FormControl>
      </Center>
    </SafeAreaView>
  );
};

export default LoginScreen;
