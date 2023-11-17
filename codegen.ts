import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: [
		{
			'http://cdl-training.cs/gqapi': {
				headers: {
					Authorization: `Bearer FS8HmkH9IhdCEzA5F6TpJJgEMYTlkpwd`,
				},
			},
		},
	],
	// documents: ['app/routes/**/*.{ts,tsx}'],
	generates: {
		'./app/utils/graphql.types.ts': {
			plugins: ['typescript', 'typescript-operations'],
			config: {
				skipTypename: true,
			},
		},
	},
};

export default config;
