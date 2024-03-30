import {baseApi as api} from '../utils/baseApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    getUsersPermissionsPermissions: build.query<
      GetUsersPermissionsPermissionsApiResponse,
      GetUsersPermissionsPermissionsApiArg
    >({
      query: () => ({url: `/users-permissions/permissions`}),
    }),
    getUsersPermissionsRoles: build.query<
      GetUsersPermissionsRolesApiResponse,
      GetUsersPermissionsRolesApiArg
    >({
      query: () => ({url: `/users-permissions/roles`}),
    }),
    postUsersPermissionsRoles: build.mutation<
      PostUsersPermissionsRolesApiResponse,
      PostUsersPermissionsRolesApiArg
    >({
      query: queryArg => ({
        url: `/users-permissions/roles`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    getUsersPermissionsRolesById: build.query<
      GetUsersPermissionsRolesByIdApiResponse,
      GetUsersPermissionsRolesByIdApiArg
    >({
      query: queryArg => ({url: `/users-permissions/roles/${queryArg.id}`}),
    }),
    putUsersPermissionsRolesByRole: build.mutation<
      PutUsersPermissionsRolesByRoleApiResponse,
      PutUsersPermissionsRolesByRoleApiArg
    >({
      query: queryArg => ({
        url: `/users-permissions/roles/${queryArg.role}`,
        method: 'PUT',
        body: queryArg.body,
      }),
    }),
    deleteUsersPermissionsRolesByRole: build.mutation<
      DeleteUsersPermissionsRolesByRoleApiResponse,
      DeleteUsersPermissionsRolesByRoleApiArg
    >({
      query: queryArg => ({
        url: `/users-permissions/roles/${queryArg.role}`,
        method: 'DELETE',
      }),
    }),
    getUsers: build.query<GetUsersApiResponse, GetUsersApiArg>({
      query: () => ({url: `/users`}),
    }),
    postUsers: build.mutation<PostUsersApiResponse, PostUsersApiArg>({
      query: queryArg => ({url: `/users`, method: 'POST', body: queryArg.body}),
    }),
    getUsersById: build.query<GetUsersByIdApiResponse, GetUsersByIdApiArg>({
      query: queryArg => ({url: `/users/${queryArg.id}`}),
    }),
    putUsersById: build.mutation<PutUsersByIdApiResponse, PutUsersByIdApiArg>({
      query: queryArg => ({
        url: `/users/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.body,
      }),
    }),
    deleteUsersById: build.mutation<
      DeleteUsersByIdApiResponse,
      DeleteUsersByIdApiArg
    >({
      query: queryArg => ({url: `/users/${queryArg.id}`, method: 'DELETE'}),
    }),
    getUsersMe: build.query<GetUsersMeApiResponse, GetUsersMeApiArg>({
      query: () => ({url: `/users/me`}),
    }),
    getUsersCount: build.query<GetUsersCountApiResponse, GetUsersCountApiArg>({
      query: () => ({url: `/users/count`}),
    }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as user};
export type GetUsersPermissionsPermissionsApiResponse =
  /** status 200 Returns the permissions tree */ {
    permissions?: UsersPermissionsPermissionsTree;
  };
export type GetUsersPermissionsPermissionsApiArg = void;
export type GetUsersPermissionsRolesApiResponse =
  /** status 200 Returns list of roles */ {
    roles?: (UsersPermissionsRole & {
      nb_users?: number;
    })[];
  };
export type GetUsersPermissionsRolesApiArg = void;
export type PostUsersPermissionsRolesApiResponse =
  /** status 200 Returns ok if the role was create */ {
    ok?: true;
  };
export type PostUsersPermissionsRolesApiArg = {
  body: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: UsersPermissionsPermissionsTree;
  };
};
export type GetUsersPermissionsRolesByIdApiResponse =
  /** status 200 Returns the role */ {
    role?: UsersPermissionsRole;
  };
export type GetUsersPermissionsRolesByIdApiArg = {
  /** role Id */
  id: string;
};
export type PutUsersPermissionsRolesByRoleApiResponse =
  /** status 200 Returns ok if the role was udpated */ {
    ok?: true;
  };
export type PutUsersPermissionsRolesByRoleApiArg = {
  /** role Id */
  role: string;
  body: {
    name?: string;
    description?: string;
    type?: string;
    permissions?: UsersPermissionsPermissionsTree;
  };
};
export type DeleteUsersPermissionsRolesByRoleApiResponse =
  /** status 200 Returns ok if the role was delete */ {
    ok?: true;
  };
export type DeleteUsersPermissionsRolesByRoleApiArg = {
  /** role Id */
  role: string;
};
export type GetUsersApiResponse =
  /** status 200 Returns an array of users */ UsersPermissionsUser[];
export type GetUsersApiArg = void;
export type PostUsersApiResponse =
  /** status 201 Returns created user info */ UsersPermissionsUser & {
    role?: UsersPermissionsRole;
  };
export type PostUsersApiArg = {
  body: {
    email: string;
    username: string;
    password: string;
  };
};
export type GetUsersByIdApiResponse =
  /** status 200 Returns a user */ UsersPermissionsUser;
export type GetUsersByIdApiArg = {
  /** user Id */
  id: string;
};
export type PutUsersByIdApiResponse =
  /** status 200 Returns updated user info */ UsersPermissionsUser & {
    role?: UsersPermissionsRole;
  };
export type PutUsersByIdApiArg = {
  /** user Id */
  id: string;
  body: {
    email: string;
    username: string;
    password: string;
  };
};
export type DeleteUsersByIdApiResponse =
  /** status 200 Returns deleted user info */ UsersPermissionsUser;
export type DeleteUsersByIdApiArg = {
  /** user Id */
  id: string;
};
export type GetUsersMeApiResponse =
  /** status 200 Returns user info */ UsersPermissionsUser;
export type GetUsersMeApiArg = void;
export type GetUsersCountApiResponse =
  /** status 200 Returns a number */ number;
export type GetUsersCountApiArg = void;
export type UsersPermissionsPermissionsTree = {
  [key: string]: {
    controllers?: {
      [key: string]: {
        [key: string]: {
          enabled?: boolean;
          policy?: string;
        };
      };
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
export type UsersPermissionsRole = {
  id?: number;
  name?: string;
  description?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
};
export type UsersPermissionsUser = {
  id?: number;
  username?: string;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export const {
  useGetUsersPermissionsPermissionsQuery,
  useGetUsersPermissionsRolesQuery,
  usePostUsersPermissionsRolesMutation,
  useGetUsersPermissionsRolesByIdQuery,
  usePutUsersPermissionsRolesByRoleMutation,
  useDeleteUsersPermissionsRolesByRoleMutation,
  useGetUsersQuery,
  usePostUsersMutation,
  useGetUsersByIdQuery,
  usePutUsersByIdMutation,
  useDeleteUsersByIdMutation,
  useGetUsersMeQuery,
  useGetUsersCountQuery,
} = injectedRtkApi;

export default injectedRtkApi;
