import {baseApi as api} from '../utils/baseApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<GetPostsApiResponse, GetPostsApiArg>({
      query: queryArg => ({
        url: `/posts`,
        params: {
          sort: queryArg.sort,
          pagination: queryArg.pagination,
          fields: queryArg.fields,
          populate: queryArg.populate,
          filters: queryArg.filters,
          locale: queryArg.locale,
        },
      }),
      providesTags: ['CreatePostTags'],
    }),
    postPosts: build.mutation<PostPostsApiResponse, PostPostsApiArg>({
      query: queryArg => ({
        url: `/posts`,
        method: 'POST',
        body: queryArg.postRequest,
      }),
      invalidatesTags: ['CreatePostTags'],
    }),
    getPostsById: build.query<GetPostsByIdApiResponse, GetPostsByIdApiArg>({
      query: queryArg => ({url: `/posts/${queryArg.id}`}),
    }),
    putPostsById: build.mutation<PutPostsByIdApiResponse, PutPostsByIdApiArg>({
      query: queryArg => ({
        url: `/posts/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.postRequest,
      }),
    }),
    deletePostsById: build.mutation<
      DeletePostsByIdApiResponse,
      DeletePostsByIdApiArg
    >({
      query: queryArg => ({url: `/posts/${queryArg.id}`, method: 'DELETE'}),
      invalidatesTags: ['CreatePostTags'],
    }),
  }),
  overrideExisting: true,
});
export {injectedRtkApi as post};
export type GetPostsApiResponse = /** status 200 OK */ PostListResponse;
export type GetPostsApiArg = {
  /** Sort by attributes ascending (asc) or descending (desc) */
  sort?: string;
  pagination?: {
    withCount?: boolean;
    page?: number;
    pageSize?: number;
    start?: number;
    limit?: number;
  };
  /** Fields to return (ex: title,author) */
  fields?: string;
  /** Relations to return */
  populate?: string;
  /** Filters to apply */
  filters?: object;
  /** Locale to apply */
  locale?: string;
};
export type PostPostsApiResponse = /** status 200 OK */ PostResponse;
export type PostPostsApiArg = {
  postRequest: PostRequest;
};
export type GetPostsByIdApiResponse = /** status 200 OK */ PostResponse;
export type GetPostsByIdApiArg = {
  id: number;
};
export type PutPostsByIdApiResponse = /** status 200 OK */ PostResponse;
export type PutPostsByIdApiArg = {
  id: number;
  postRequest: PostRequest;
};
export type DeletePostsByIdApiResponse = /** status 200 OK */ number;
export type DeletePostsByIdApiArg = {
  id: number;
};
export type Post = {
  description?: string;
  Image?: {
    data?: {
      id?: number;
      attributes?: {
        name?: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: any;
        hash?: string;
        ext?: string;
        mime?: string;
        size?: number;
        url?: string;
        previewUrl?: string;
        provider?: string;
        provider_metadata?: any;
        related?: {
          data?: {
            id?: number;
            attributes?: {};
          }[];
        };
        folder?: {
          data?: {
            id?: number;
            attributes?: {
              name?: string;
              pathId?: number;
              parent?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
              children?: {
                data?: {
                  id?: number;
                  attributes?: {};
                }[];
              };
              files?: {
                data?: {
                  id?: number;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      }[];
                    };
                    folder?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      };
                    };
                    folderPath?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: number;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: number;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {};
                                  }[];
                                };
                                permissions?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {
                                      action?: string;
                                      actionParameters?: any;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: {
                                        data?: {
                                          id?: number;
                                          attributes?: {};
                                        };
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: {};
                                        };
                                      };
                                      updatedBy?: {
                                        data?: {
                                          id?: number;
                                          attributes?: {};
                                        };
                                      };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {};
                                  };
                                };
                                updatedBy?: {
                                  data?: {
                                    id?: number;
                                    attributes?: {};
                                  };
                                };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: number;
                              attributes?: {};
                            };
                          };
                          updatedBy?: {
                            data?: {
                              id?: number;
                              attributes?: {};
                            };
                          };
                        };
                      };
                    };
                    updatedBy?: {
                      data?: {
                        id?: number;
                        attributes?: {};
                      };
                    };
                  };
                }[];
              };
              path?: string;
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
              updatedBy?: {
                data?: {
                  id?: number;
                  attributes?: {};
                };
              };
            };
          };
        };
        folderPath?: string;
        createdAt?: string;
        updatedAt?: string;
        createdBy?: {
          data?: {
            id?: number;
            attributes?: {};
          };
        };
        updatedBy?: {
          data?: {
            id?: number;
            attributes?: {};
          };
        };
      };
    };
  };
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  createdBy?: {
    data?: {
      id?: number;
      attributes?: {};
    };
  };
  updatedBy?: {
    data?: {
      id?: number;
      attributes?: {};
    };
  };
};
export type PostListResponseDataItem = {
  id?: number;
  attributes?: Post;
};
export type PostListResponse = {
  data?: PostListResponseDataItem[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
};
export type Error = {
  data?: (object | object[]) | null;
  error: {
    status?: number;
    name?: string;
    message?: string;
    details?: object;
  };
};
export type PostResponseDataObject = {
  id?: number;
  attributes?: Post;
};
export type PostResponse = {
  data?: PostResponseDataObject;
  meta?: object;
};
export type PostRequest = {
  data: {
    description?: string;
    Image?: number | string;
  };
};
export const {
  useGetPostsQuery,
  usePostPostsMutation,
  useGetPostsByIdQuery,
  usePutPostsByIdMutation,
  useDeletePostsByIdMutation,
} = injectedRtkApi;
export default injectedRtkApi;
