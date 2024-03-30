import {PostListResponseDataItem, PostRequest} from 'generated/post';

/**
 * Adapts a PostRequest object to match the structure of a PostListResponseDataItem object.
 * @param post The PostRequest object to adapt
 * @returns A PostListResponseDataItem object with adapted attributes
 */
export const offlinePostAdapter = (
  post: PostRequest,
): PostListResponseDataItem => {
  // Adapt the structure of the PostRequest to match PostListResponseDataItem
  return {
    // Ensure the attributes object exists and contains the necessary properties
    attributes: {
      description: post?.data?.description,
    },
  };
};
