import type {ConfigFile} from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: './api.json',
  apiFile: './api.ts',
  outputFiles: {
    '../generated/api.ts': {},
  },
  hooks: true,
};

export default config;
