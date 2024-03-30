import React from 'react';
import {Text, Flex} from 'native-base';
import PostHeader, {PostHeaderInterface} from './PostHeader';
import {Post} from 'generated/post';

// Define props interface for PostItem component
export interface PostItemInterface extends PostHeaderInterface {
  // Indicates whether the post data is offline
  isOfflineData?: boolean;
  // Function to handle post deletion
  onDelete: () => void;
  // Post data
  post: Post;
}

// PostItem component renders a single post item
const PostItem = ({
  isOfflineData,
  onDelete,
  post,
  fullName,
}: PostItemInterface) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="full"
      p="3"
      pb="6"
      bgColor="white"
      opacity={isOfflineData ? 0.5 : 1}
      flexDirection="column">
      <PostHeader fullName={fullName} post={post} onDelete={onDelete} />
      <Flex mt="2" w="full">
        <Text>{post?.description}</Text>
      </Flex>
    </Flex>
  );
};

export default PostItem;
