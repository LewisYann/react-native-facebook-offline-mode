import {
  PostPostsApiArg,
  useDeletePostsByIdMutation,
  useGetPostsQuery,
} from 'generated/post';
import {FlatList, Heading, View, useToast} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';
import PostItem from 'uikit/Post/PostItem';
import CreatePostCard from 'uikit/Post/CreatePostCard';
import {useOfflineActionQueue} from 'hooks/useQueuingAction';
import {offlinePostAdapter} from 'utils/adapters/offlinePostAdapter';
import {computePostWithOfflineData, getErrorMessage} from 'utils/helpers';
import {useSelector} from 'react-redux';
import {RootState} from 'store';

const HomeScreen = () => {
  // Retrieve data, refetch function, and loading state from the useGetPostsQuery hook
  const {data, refetch, isFetching} = useGetPostsQuery({
    sort: 'createdAt:desc', // Specify sorting order
  });

  const account = useSelector((state: RootState) => state.auth.account);

  // Retrieve deletePost mutation function from the useDeletePostsByIdMutation hook
  const [deletePost] = useDeletePostsByIdMutation({});

  // Retrieve offlineActions and offlinePostAdapter from the useOfflineActionQueue hook
  const {actions: offlineActions} = useOfflineActionQueue<PostPostsApiArg>();

  // Retrieve toast notification function from useToast hook
  const toast = useToast();

  // Adapt offline actions to match PostListResponseDataItem structure and mark them as offline
  const actions = offlineActions?.map(item => ({
    ...offlinePostAdapter(item.payload.postRequest),
    isOffline: true,
  }));

  // Combine offline actions with online post data
  const postData = computePostWithOfflineData(actions, data);

  // Function to handle post deletion
  const handleDeletePost = async (id: number) => {
    try {
      // Call deletePost mutation to delete the post by its ID
      await deletePost({id}).unwrap();
      // Show success toast notification
      toast.show({title: 'Publication supprimée'});
    } catch (error) {
      // Show error toast notification with error message
      toast.show({
        title: 'Erreur',
        description: getErrorMessage(error),
      });
    }
  };
  const fullName = account?.username;

  return (
    <SafeAreaView>
      <View py="3" h="full" bgColor="white">
        <Heading ml="3" color="primary.500">
          FaceOfBook
        </Heading>
        <FlatList
          h="full"
          ListHeaderComponent={<CreatePostCard />}
          onRefresh={refetch}
          refreshing={isFetching && !!data}
          data={postData}
          renderItem={item => (
            <View bgColor="gray.200" py="2">
              <PostItem
                isOfflineData={item.item?.isOffline}
                post={item.item.attributes}
                onDelete={() => handleDeletePost(item.item.id)}
                fullName={fullName}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
