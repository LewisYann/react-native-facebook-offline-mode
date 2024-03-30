import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BACKEND_URL} from 'constants/all';
import {RootState} from 'store';

const EXCLUDE_TOKEN = ['auth'];
export const baseApi = createApi({
  reducerPath: 'backendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, {getState, endpoint}) => {
      const token = (getState() as RootState).auth.token;

      if (token && endpoint.indexOf(EXCLUDE_TOKEN.join(',')) === -1) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ['CreatePostTags'],
});
