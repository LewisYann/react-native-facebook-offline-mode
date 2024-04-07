import {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {DATE_FORMAT} from 'constants/all';
import dayjs from 'dayjs';
import {PostListResponse, PostListResponseDataItem} from 'generated/post';

/**
 * Retrieves a user-friendly error message from a FetchBaseQueryError object.
 * If no specific error message is found, a default error message is returned.
 * @param error The FetchBaseQueryError object
 * @returns A user-friendly error message
 */
export const getErrorMessage = (error: FetchBaseQueryError): string => {
  // Check if error object and its data exist, return error message or default message
  return error?.data?.error?.message ?? "Une erreur inattendue s'est produite";
};

/**
 * Combines offline and online post data to compute final post data with offline status.
 * @param offline Array of offline posts with additional 'isOffline' property
 * @param postData Response data containing online posts
 * @returns Combined post data with offline status
 */
export function computePostWithOfflineData(
  offline: Array<
    PostListResponseDataItem & {isOffline: boolean; actionId: string}
  >,
  postData: PostListResponse,
): Array<PostListResponseDataItem & {isOffline?: boolean; actionId?: string}> {
  // If no offline data provided, return only online posts data
  if (!offline?.length) {
    return postData?.data ?? [];
  }
  // Combine offline and online posts data
  return [...offline, ...(postData?.data ?? [])];
}

export const formatDate = (date: string) => {
  return dayjs(date).format(DATE_FORMAT);
};
