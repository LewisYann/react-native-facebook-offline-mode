import React from 'react';
import {Avatar, Box, Flex, Text} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {TouchableOpacity} from 'react-native';
import {Post} from 'generated/post';
import {formatDate} from 'utils/helpers';

export interface PostHeaderInterface {
  post: Post;
  onDelete: () => void;
  fullName?: string;
}
const PostHeader = ({post, onDelete, fullName = ''}: PostHeaderInterface) => {
  return (
    <Flex w="full" flexDirection="row" justifyContent="space-between">
      <Flex alignItems="center" flexDirection="row">
        <Avatar />
        <Box ml="2">
          <Text fontWeight="bold">{fullName}</Text>
          <Flex flexDirection="row" alignItems="center">
            <Text color="gray.500">{formatDate(post.createdAt)} </Text>
            <Entypo name="dot-single" />
            <Entypo name="globe" />
          </Flex>
        </Box>
      </Flex>
      <Flex flexDirection="row">
        <TouchableOpacity onPress={onDelete}>
          <EvilIcons name="close" size={23} />
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
};

export default PostHeader;
