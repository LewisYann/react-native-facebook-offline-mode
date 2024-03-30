import type {ConfigFile} from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './full_docs.json',
  apiFile: './api.ts',
  outputFiles: {
    '../generated/authentication.ts': {
      filterEndpoints: [/auth/i],
      exportName: 'authentication',
    },
    '../generated/user.ts': {
      filterEndpoints: [/users/i],
      exportName: 'user',
    },
    '../generated/post.ts': {
      filterEndpoints: [/posts/i],
      exportName: 'post',
    },
  },
  hooks: true,
};

export default config;
